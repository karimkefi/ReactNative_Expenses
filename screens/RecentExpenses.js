import { useContext, useEffect, useState } from 'react';

import ExpensesOutput from '../components/ExpensesOutput';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import ErrorOverlay from '../components/UI/ErrorOverlay';

import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../utility/date';
import { fetchExpenses } from '../utility/http';

function RecentExpenses() {

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    const expensesCtx = useContext(ExpensesContext);

    useEffect(() => {

        //creating getExpense method as this returns a promise. 
        //We do not want to make useEffect an async function (as this will result in it returning a promise)!
        async function getExpenses() {
            setIsLoading(true)
            try {
                const expenses = await fetchExpenses();
                expensesCtx.setExpenses(expenses);
            }
            catch (err) {
                setError('Could not fetch expense')
            }
            setIsLoading(false)
        };

        getExpenses();
    }, []);

    const today = new Date();
    const weekAgo = getDateMinusDays(today, 7)

    const recentExpenses = expensesCtx.expenses.filter(expense => {
        //return true if greater than 1 week ago
        return (expense.date >= weekAgo) && (expense.date <= today)
    })

    if (error && !isLoading) {
        return <ErrorOverlay message={error} />
    }

    if (isLoading) {
        return <LoadingOverlay />
    }

    return (
        <ExpensesOutput
            expenses={recentExpenses}
            expensesPeriod="Last 7 days"
            fallbackText="No expenses registered in the last 7 days"
        />
    )
}

export default RecentExpenses;