import React, { useState } from 'react';
import styles from './UserInput.module.css';

const initialuserInput = {
  'current-savings': 1000,
  'yearly-contribution': 1200,
  'expected-return': 7,
  duration: 10,
};

const UserInput = (props) => {
  const [userInput, setuserInput] = useState(initialuserInput);

  const onSubmithandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };

  const reSetHandler = () => {
    setuserInput(initialuserInput);
  };

  const inputChangeHandler = (input, value) => {
    //console.log(typeof value, value);
    setuserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };
  return (
    <form onSubmit={onSubmithandler} className={styles.form}>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor='current-savings'>Current Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler('current-savings', event.target.value)
            }
            value={userInput['current-savings']}
            type='number'
            id='current-savings'
          />
        </p>
        <p>
          <label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler('yearly-contribution', event.target.value)
            }
            value={userInput['yearly-contribution']}
            type='number'
            id='yearly-contribution'
          />
        </p>
      </div>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor='expected-return'>
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              inputChangeHandler('expected-return', event.target.value)
            }
            value={userInput['expected-return']}
            type='number'
            id='expected-return'
          />
        </p>
        <p>
          <label htmlFor='duration'>Investment Duration (years)</label>
          <input
            onChange={(event) =>
              inputChangeHandler('duration', event.target.value)
            }
            value={userInput['duration']}
            type='number'
            id='duration'
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          onClick={reSetHandler}
          type='reset'
          className={styles.buttonAlt}
        >
          Reset
        </button>
        <button type='submit' className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};
export default UserInput;
