import React, { Component } from 'react';

class FormRegisterLogin extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep;
  }

  render() {
    const { values } = this.props;
    const { nextStep } = this.props;

    return (
      <div>
        <h3>TEST: { values.currentDate }</h3>
        <button type="button" onClick={ nextStep } />
      </div>
    );
  }
}

export default FormRegisterLogin;
