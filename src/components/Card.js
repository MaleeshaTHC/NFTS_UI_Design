import React from 'react';

function Card(props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px', borderRadius: '10px' }}>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button>{props.buttonText}</button>
    </div>
  );
}

export default Card;