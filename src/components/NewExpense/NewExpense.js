import React, { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [formVisibility, setformVisibility] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    hideForm();
  };

  const showForm = () => {
    setformVisibility(true);
  };

  const hideForm = () => {
    setformVisibility(false);
  };

  return (
    <div className='new-expense'>
      {formVisibility ? (
        <ExpenseForm
          onCancel={hideForm}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : (
        <button onClick={showForm}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
