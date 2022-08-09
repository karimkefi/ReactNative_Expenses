import { StatusBar } from 'expo-status-bar';
import MainNavigator from './navigator';

import AuthContextProvider from './store/auth-context';
import ExpensesContextProvider from './store/expenses-context';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AuthContextProvider>
        <ExpensesContextProvider>
          <MainNavigator />
        </ExpensesContextProvider>
      </AuthContextProvider>
    </>
  );
}
