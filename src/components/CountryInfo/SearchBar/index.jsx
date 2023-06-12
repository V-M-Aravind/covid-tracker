import { Button, TextField } from '@mui/material';
import styles from './SearchBar.module.css';
import { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
  const [text, setText] = useState('');
  return (
    <div className={styles.searchBar}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(text);
        }}
        className={styles.form}
      >
        <TextField
          id='country-name'
          label='Enter Country'
          variant='outlined'
          name='country-name'
          required
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button variant='contained' type='submit' size='large'>
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
