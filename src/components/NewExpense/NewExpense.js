import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(){
    
    return (
        <div classname='new-expense'>
            <ExpenseForm />
        </div>
    );
};

export default NewExpense;