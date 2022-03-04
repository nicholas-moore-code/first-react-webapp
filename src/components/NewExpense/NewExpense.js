import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(){
    
    return (
        <div classname='new-expense'>
            <ExpenseForm />
        </div>
    );
};

export default NewExpense;