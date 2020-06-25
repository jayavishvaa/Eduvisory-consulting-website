
import React, { Component } from 'react';
import { CountryDropdown, RegionDropdown} from 'react-country-region-selector';
 
 
export default class Countrydropdown extends Component {
  constructor (props) {
    super(props);
    this.state = { country: '', region: '' };
  }
 
  selectCountry (val) {
    this.props.setFieldValue('country',val);
    this.setState({ country: val });
  }
 
  selectRegion (val) {
    this.props.setFieldValue('city',val);
    this.setState({ region: val });
  }
 
  render () {
    const { country, region } = this.state;
    return (
      <div>
        <label htmlFor="countrylist">Select your country</label>
        <CountryDropdown
          label="Select your Country"
          style={{width:500,padding:6,bordercolor:'grey'}}
          value={country}
          onChange={(val) => this.selectCountry(val)} />

        <label htmlFor="regionlist" style={{marginTop:20}}>Select your Region</label>  
        <RegionDropdown
          style={{width:500,padding:6}}
          country={country}
          value={region}
          onChange={(val) => this.selectRegion(val)} />
      </div>
    );
  }
}