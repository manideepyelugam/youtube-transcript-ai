import React, { useContext, useState } from 'react';
import { FinalContext } from '../Context';

const Search = () => {
  const [text, setText] = useState('');
  const { setUrl } = useContext(FinalContext);

  function submit() {
    if (text.trim() === '') {
      alert('Please enter a valid URL');
    //   console.log(text);
      
      return;
    }

    console.log('Input URL:', text);
    setUrl(text); 
    setText(''); 
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <input
        type="text"
        placeholder="Enter YouTube video URL"
        onChange={(e) => setText(e.target.value)}
        value={text}
        style={{
          padding: '10px',
          width: '60%',
          borderRadius: '4px',
          border: '1px solid #ccc',
          marginRight: '10px',
        }}
      />
      <button
        onClick={submit}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Search;
