import { useContext } from 'react';

import ExpensesOutput from '../components/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../utility/date';

function RecentExpenses() {

    const expensesCtx = useContext(ExpensesContext);

    const today = new Date();
    const weekAgo = getDateMinusDays(today, 7)

    const recentExpenses = expensesCtx.expenses.filter(expense => { 

        console.log('week ago', weekAgo)

        //return true if greater than 1 week ago
        return expense.date > weekAgo
    })

    return (
        <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days" />    
    )
}

export default RecentExpenses;