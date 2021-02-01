import React from 'react';
import SiteHeader from './SiteHeader';

/* --- Semantic-UI --- */
import { Header } from 'semantic-ui-react';

export default (props) => {
  return (
    <div class = "ui vertically divided grid">
      <div class = "one column row">
        <div class = "column">
          <Header as='h1'>Intellectual Property</Header>
        </div>
      </div>
      <SiteHeader />
      { props.children }
      <h1>FOOTER</h1>
    </div>
  );
};
