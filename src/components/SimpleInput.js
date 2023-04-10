import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

  const nameInputIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !nameInputIsValid && enteredNameTouched;

  const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const emailInputIsValid = enteredEmail.match(validEmailRegex);
  const emailInputIsInvalid = !emailInputIsValid && enteredEmailTouched;

  let formIsValid = false;

  if(nameInputIsValid && emailInputIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true)
  }

  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value);
  }

  const emailInputBlurHandler = event => {
    setEnteredEmailTouched(true)
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true)

    if (!formIsValid) {
      return;
    }

    console.log(enteredName);

    setEnteredName('');
    setEnteredNameTouched(false)
    setEnteredEmail('');
    setEnteredEmailTouched(false)
  };


  const nameInputClasses = formIsValid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          value={enteredName}
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className='error-text'>Name must not be empty!</p>
        )}
      </div>
      <div className={nameInputClasses}>
        <label htmlFor='email'>Your email</label>
        <input
          value={enteredEmail}
          type='email'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailInputIsInvalid && (
          <p className='error-text'>Email is invalid!</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid} >Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
