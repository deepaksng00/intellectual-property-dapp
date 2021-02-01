import React from 'react';
import SiteHeader from './SiteHeader';

export default (props) => {
  return (
    <div class = "ui vertically divided grid">
      <SiteHeader />
      { props.children }
      <h1>FOOTER</h1>
    </div>
  );
};
