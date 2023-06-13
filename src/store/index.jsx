import { useReducer, useContext, createContext, useEffect } from 'react';
import covidClientInstance from '../services';
import getGeolocation from '../components/utility/getGeolocation';
import {
  SET_CONSENT,
  SET_COUNTRY_DATA,
  SET_COUNTRY_ERROR,
  SET_COUNTRY_LOADING,
  SET_GEO_COORDS,
  SET_GRAPH_DATA,
  SET_GRAPH_ERROR,
  SET_GRAPH_LOADING,
  SET_MAP_DATA,
  SET_MAP_ERROR,
  SET_MAP_LOADING,
} from './storeConstants';
import {
  COUNTRY_NOT_FOUND_ERROR,
  COUNTRY_NOT_FOUND_ERROR_MESSAGE,
  DEFAULT_COORDINATES,
  GRAPH_ERROR_MESSAGE,
  MAP_ERROR_MESSAGE,
} from '../components/constants';

const initialState = {
  mapData: {
    coordinates: null,
    data: [],
    isLoading: true,
    error: '',
    consentCompleted: false,
    geoLocationFetchError: false,
  },
  graph: {
    data: {},
    isLoading: true,
    error: '',
  },
  country: {
    data: {},
    isLoading: false,
    error: '',
  },
};

const StoreStateContext = createContext(null);

export function useStoreState() {
  const context = useContext(StoreStateContext);
  return context;
}

const storeReducer = (state, action) => {
  switch (action.type) {
    //World map page
    //map
    case SET_MAP_DATA:
      return {
        ...state,
        mapData: {
          ...state.mapData,
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };
    case SET_MAP_LOADING:
      return {
        ...state,
        mapData: {
          ...state.mapData,
          isLoading: true,
          error: null,
        },
      };
    case SET_MAP_ERROR:
      return {
        ...state,
        mapData: {
          ...state.mapData,
          isLoading: false,
          error: action.payload,
        },
      };
    case SET_GEO_COORDS:
      return {
        ...state,
        mapData: {
          ...state.mapData,
          ...action.payload,
        },
      };
    case SET_CONSENT:
      return {
        ...state,
        mapData: {
          ...state.mapData,
          consentCompleted: true,
        },
      };
    //graph
    case SET_GRAPH_DATA:
      return {
        ...state,
        graph: {
          ...state.graph,
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };
    case SET_GRAPH_LOADING:
      return {
        ...state,
        graph: {
          ...state.graph,
          isLoading: true,
          error: null,
        },
      };
    case SET_GRAPH_ERROR:
      return {
        ...state,
        graph: {
          ...state.graph,
          isLoading: false,
          error: action.payload,
        },
      };
    //countries page
    case SET_COUNTRY_DATA:
      return {
        ...state,
        country: {
          ...state.country,
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };
    case SET_COUNTRY_LOADING:
      return {
        ...state,
        country: {
          ...state.country,
          isLoading: true,
          error: null,
        },
      };
    case SET_COUNTRY_ERROR:
      return {
        ...state,
        country: {
          ...state.country,
          isLoading: false,
          error: action.payload,
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(storeReducer, initialState);
  const dispatchMapData = () => {
    dispatch({
      type: SET_MAP_LOADING,
    });
    getMapData()
      .then((data) => {
        dispatch({ type: SET_MAP_DATA, payload: data });
      })
      .catch(() =>
        dispatch({
          type: SET_MAP_ERROR,
          payload: MAP_ERROR_MESSAGE,
        })
      );
  };
  const dispatchGeoLocation = (isDefault = false) => {
    dispatch({
      type: SET_CONSENT,
    });
    if (isDefault) {
      dispatch({
        type: SET_GEO_COORDS,
        payload: { coordinates: DEFAULT_COORDINATES },
      });
    } else {
      getGeolocation(dispatch);
    }
  };
  const dispatchGraphData = () => {
    dispatch({
      type: SET_GRAPH_LOADING,
    });
    getGraphData()
      .then((data) => {
        dispatch({ type: SET_GRAPH_DATA, payload: data });
      })
      .catch(() =>
        dispatch({
          type: SET_GRAPH_ERROR,
          payload: GRAPH_ERROR_MESSAGE,
        })
      );
  };
  const dispatchCountryData = (country) => {
    dispatch({
      type: SET_COUNTRY_LOADING,
    });
    getCountryData(country)
      .then((data) => {
        dispatch({ type: SET_COUNTRY_DATA, payload: data });
      })
      .catch((e) => {
        if (e?.response?.data?.message === COUNTRY_NOT_FOUND_ERROR) {
          dispatch({
            type: SET_COUNTRY_ERROR,
            payload: COUNTRY_NOT_FOUND_ERROR_MESSAGE,
          });
        } else
          dispatch({
            type: SET_COUNTRY_ERROR,
            payload: COUNTRY_NOT_FOUND_ERROR_MESSAGE,
          });
      });
  };
  useEffect(() => {
    dispatchMapData();
    dispatchGraphData();
  }, []);

  return (
    <StoreStateContext.Provider
      value={{
        ...state,
        dispatchGeoLocation,
        dispatchCountryData,
        dispatchGraphData,
      }}
    >
      {props.children}
    </StoreStateContext.Provider>
  );
}

function getMapData() {
  return covidClientInstance.get('countries').then((res) => res.data);
}
function getGraphData() {
  return covidClientInstance
    .get('historical/all?lastdays=180')
    .then((res) => res.data.deaths);
}
function getCountryData(country) {
  return covidClientInstance
    .get(`countries/${country}?strict=true`)
    .then((res) => res.data);
}
