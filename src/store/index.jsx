import { useReducer, useContext, createContext, useEffect } from 'react';
import covidClientInstance from '../services';
import getGeolocation from '../components/utility/getGeolocation';

const initialState = {
  mapData: {
    coordinates: null,
    data: [],
    isLoading: false,
    error: '',
    consentCompleted: false,
  },
  graph: {
    data: {},
    isLoading: false,
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
    case 'SET_MAP_DATA':
      return {
        ...state,
        mapData: {
          ...state.mapData,
          isLoading: false,
          data: action.payload,
        },
      };
    case 'SET_MAP_LOADING':
      return {
        ...state,
        mapData: {
          ...state.mapData,
          isLoading: true,
        },
      };
    case 'SET_MAP_ERROR':
      return {
        ...state,
        mapData: {
          ...state.mapData,
          isLoading: false,
          error: action.payload,
        },
      };
    case 'SET_GEO_COORDS':
      return {
        ...state,
        mapData: {
          ...state.mapData,
          coordinates: action.payload,
        },
      };
    case 'SET_CONSENT':
      return {
        ...state,
        mapData: {
          ...state.mapData,
          consentCompleted: true,
        },
      };
    //graph
    case 'SET_GRAPH_DATA':
      return {
        ...state,
        graph: {
          ...state.graph,
          isLoading: false,
          data: action.payload,
        },
      };
    case 'SET_GRAPH_LOADING':
      return {
        ...state,
        graph: {
          ...state.graph,
          isLoading: true,
        },
      };
    case 'SET_GRAPH_ERROR':
      return {
        ...state,
        graph: {
          ...state.graph,
          isLoading: false,
          error: action.payload,
        },
      };
    //countries page
    case 'SET_COUNTRY_DATA':
      return {
        ...state,
        country: {
          ...state.country,
          isLoading: false,
          data: action.payload,
        },
      };
    case 'SET_COUNTRY_LOADING':
      return {
        ...state,
        country: {
          ...state.country,
          isLoading: true,
        },
      };
    case 'SET_COUNTRY_ERROR':
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
      type: 'SET_MAP_LOADING',
    });
    getMapData().then((data) => {
      dispatch({ type: 'SET_MAP_DATA', payload: data });
    });
  };
  const dispatchGeoLocation = (isDefault = false) => {
    dispatch({
      type: 'SET_CONSENT',
    });
    console.log('default', isDefault);
    if (isDefault) {
      dispatch({
        type: 'SET_GEO_COORDS',
        payload: [51.505, -0.09],
      });
    } else {
      getGeolocation(dispatch);
    }
  };
  const dispatchGraphData = () => {
    dispatch({
      type: 'SET_GRAPH_LOADING',
    });
    getGraphData().then((data) => {
      dispatch({ type: 'SET_GRAPH_DATA', payload: data });
    });
  };
  const dispatchCountryData = (country) => {
    dispatch({
      type: 'SET_COUNTRY_LOADING',
    });
    getCountryData(country).then((data) => {
      dispatch({ type: 'SET_COUNTRY_DATA', payload: data });
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
