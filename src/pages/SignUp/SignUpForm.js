import React, { Component } from 'react';
import { Box, Button, Card, TextField, Typography } from '@mui/material';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    error: {
      nameError: '',
      emailError: '',
      passwordError: [],
    },
    isFormValid: false,
  };

  onChangeHandler = (stateProperty, stateValue) => {
    if (stateProperty == 'name') {
      this.validateName(stateValue);
    }
    if (stateProperty == 'email') {
      this.validateEmail(stateValue);
    }
    if (stateProperty == 'password') {
      this.validatePassword(stateValue);
    }

    this.setState({
      [stateProperty]: stateValue,
    });
  };

  validateName = (nameValue) => {
    let isNameValid = false;
    let nameError = this.state.error.nameError;
    const alphabetsOnlyPattern = /^[A-Za-z. \'-]+(?: [A-Za-z. \'-]+)*$/;

    if (nameValue == '') {
      isNameValid = false;
      nameError = 'Please input your name.';
    } else if (!alphabetsOnlyPattern.test(nameValue)) {
      isNameValid = false;
      nameError = 'It should contain alphabets only';
    } else {
      isNameValid = true;
      nameError = '';
    }

    this.setState({
      name: nameValue,
      isFormValid: isNameValid,
      error: { ...this.state.error, nameError },
    });

    return isNameValid;
  };

  validateEmail = (emailValue) => {
    let isEmailValid = false;
    let emailError = this.state.error.emailError;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailValue == '') {
      isEmailValid = false;
      emailError = 'Please input your email.';
    } else if (!emailPattern.test(emailValue)) {
      isEmailValid = false;
      emailError = "Please check email's format";
    } else {
      isEmailValid = true;
      emailError = '';
    }

    this.setState({
      email: emailValue,
      isFormValid: isEmailValid,
      error: { ...this.state.error, emailError },
    });

    return isEmailValid;
  };

  validatePassword = (passwordValue) => {
    let isPasswordValid = false;
    let passwordError = [];

    const atLeastOneUpperCasePattern = /(?=.*?[A-Z])/;
    const atLeastOneDigitPattern = /(?=.*?[0-9])/;
    const atLeastOneSpecialCharacterPattern = /(?=.*?[!@#$%^&*+=])/;
    const minimumOfEightCharacterPattern = /(.{8,})/;

    if (passwordValue == '') {
      isPasswordValid = false;
      passwordError.push('Please input your password.');
    } else {
      isPasswordValid = true;
    }
    if (!atLeastOneUpperCasePattern.test(passwordValue)) {
      isPasswordValid = false;
      passwordError.push('Must have at least one upper case.');
    } else {
      isPasswordValid = true;
    }
    if (!atLeastOneDigitPattern.test(passwordValue)) {
      isPasswordValid = false;
      passwordError.push('Must have at least one digit.');
    } else {
      isPasswordValid = true;
    }
    if (!atLeastOneSpecialCharacterPattern.test(passwordValue)) {
      isPasswordValid = false;
      passwordError.push('Must have at least one special character.');
    } else {
      isPasswordValid = true;
    }
    if (!minimumOfEightCharacterPattern.test(passwordValue)) {
      isPasswordValid = false;
      passwordError.push('Minimum of Eight character.');
    } else {
      isPasswordValid = true;
    }

    this.setState({
      password: passwordValue,
      isFormValid: isPasswordValid,
      error: { ...this.state.error, passwordError },
    });

    return isPasswordValid;
  };

  onSubmitHandler = (e) => {
    e.preventDefault();

    if (
      this.validateName(this.state.name) &&
      this.validateEmail(this.state.email) &&
      this.validatePassword(this.state.password)
    ) {
      alert('Form is submitted');

      console.log(this.state);

      this.setState({
        name: '',
        email: '',
        password: '',
        error: {
          nameError: '',
          emailError: '',
          passwordError: [],
        },
        isFormValid: false,
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className="sign-up-form">
        <Box
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ pb: 3 }}>
            <Typography variant="h5" sx={{ textAlign: 'center' }}>
              Registration
            </Typography>
          </Box>
          <TextField
            id="nameInput"
            label="Name"
            variant="outlined"
            value={this.state.name}
            onChange={(e) => {
              this.onChangeHandler('name', e.target.value);
            }}
          />
          <Typography sx={{ color: 'red', fontSize: 14, mb: 2 }}>
            {this.state.error.nameError}
          </Typography>
          <TextField
            id="emailInput"
            label="Email"
            variant="outlined"
            value={this.state.email}
            onChange={(e) => {
              this.onChangeHandler('email', e.target.value);
            }}
          />
          <Typography sx={{ color: 'red', fontSize: 14, mb: 2 }}>
            {this.state.error.emailError}
          </Typography>
          <TextField
            id="passwordInput"
            label="Password"
            variant="outlined"
            type="password"
            value={this.state.password}
            onChange={(e) => {
              this.onChangeHandler('password', e.target.value);
            }}
          />
          <Typography sx={{ color: 'red', fontSize: 14, mb: 4 }}>
            {this.state.error.passwordError.map((err, index) => (
              <p key={index}>{err}</p>
            ))}
          </Typography>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    );
  }
}
