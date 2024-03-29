import React from 'react';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default class PhoneInput extends React.Component {
	state = { phone: '' };

  handleOnChange = value => {
    console.log(value);
    this.setState({ phone: value }, () => {
      this.props.setFieldValue('phonenumber',this.state.phone)
      console.log(this.state.phone);
    });
  };

	render() {
		return (
			<div>
				<ReactPhoneInput
					inputExtraProps={{
						name: 'phone',
						required: true,
						autoFocus: true
					}}
					inputStyle={{ width: 500 }}
					placeholder="Enter Your Phone number"
					onChange={this.handleOnChange}
					value={this.state.phone}
					country= {this.props.values.country.toLowerCase().slice(0,2)}
				/>
			</div>
		);
	}
}
