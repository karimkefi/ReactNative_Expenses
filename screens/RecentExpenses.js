import { Text } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput';

function RecentExpenses() {
    return (
        <ExpensesOutput expenses={{}} expensesPeriod="Last 7 days" />    
    )
}

export default RecentExpenses;