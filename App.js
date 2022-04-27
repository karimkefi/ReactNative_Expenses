import { StatusBar } from 'expo-status-bar';
import MainNavigator from './navigator';
import ExpensesContextProvider from './store/expenses-context';

export default function App() {
  return (
    <>
      <ExpensesContextProvider>
        <StatusBar style="auto" />
        <MainNavigator />
      </ExpensesContextProvider>
    </>
  );
}
