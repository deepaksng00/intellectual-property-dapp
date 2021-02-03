import React from 'react';

export default (props) => {
  return (
    <div class="grid-container">
      <header class="grid-item">
        <h1 class="title">&copy; INTELLECTUAL PROPERTY</h1>
      </header>
      { props.children }
      <footer>
        <h2>Powered by Ethereum</h2>
      </footer>
    </div>
  );
};
