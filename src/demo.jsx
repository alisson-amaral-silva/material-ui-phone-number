import React from 'react';
import { render } from 'react-dom';
import MaterialUiPhoneNumberTextField from './index';
import mockItems from './mock'

class ChangeDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: '',
    };
  }

  render() {
    const { number } = this.state;

    return (
      <div>
        Current number:
        {' '}
        {number}

        <br />

        <MaterialUiPhoneNumberTextField
          defaultCountry="it"
          preferredCountries={['it', 'se']}
          sx={{marginTop: '1rem'}}
          label="Phone number"
          onChange={(e) => {
            this.setState({ number: e });
          }}
        />
      </div>
    );
  }
}

export default render(
  <div style={{ fontFamily: "'Roboto', sans-serif", fontSize: '15px' }}>
    <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
      <p>v1.1.0</p>
      <p>Exclude countries (usa, canada)</p>
      <MaterialUiPhoneNumberTextField
        defaultCountry="no"
        preferredCountries={['no']}
        label="Phone number"
        excludeCountries={['us', 'ca']}
      />
      <p>Only countries</p>
      <MaterialUiPhoneNumberTextField
        defaultCountry="gb"
        onlyCountries={['gb', 'es']}
        label="Phone number"
      />
      <p>Preferred countries</p>
      <MaterialUiPhoneNumberTextField
        defaultCountry="it"
        preferredCountries={['it', 'se']}
        label="Phone number"
      />
      <p>onChange</p>
      <ChangeDemo />
      <p>Native</p>
      <MaterialUiPhoneNumberTextField
        defaultCountry="it"
        preferredCountries={['it', 'se']}
        native
        label="Phone number"
      />
    </div>

    <div style={{ display: 'inline-block', marginLeft: '40px' }}>
      <p>v2</p>
      <p>Auto country detect by value</p>
      <MaterialUiPhoneNumberTextField
        value="+3802343252"
        label="Phone number"
      />
      <p>Disabled flag by default</p>
      <p>Customizable placeholder</p>
    </div>

    <div style={{
      display: 'inline-block', marginLeft: '40px', verticalAlign: 'top', marginTop: '35px',
    }}
    >

      <p>Custom list</p>
      <MaterialUiPhoneNumberTextField
        defaultCountry="ar"
        preferredCountries={['ar','br', 'us']}
        label="Phone number"
        countryList={mockItems}
      />

      <p>Error state</p>
      <MaterialUiPhoneNumberTextField
        defaultCountry="ar"
        label="Phone number"
        error={true}
        countryList={mockItems}
      />
    </div>
  </div>,
  document.getElementById('root'),
);
