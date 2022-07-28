import { createContext, useReducer } from 'react';

//Creates a Context object. When React renders a component that subscribes to this Context object 
//it will read the current context value from the closest matching Provider 
export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => { },
    setExpenses: (expenses) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, { description, amount, date }) => { },
});

//function of the reducer is to return a new state
function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            console.log('context ADD', action.payload)
            return [action.payload, ...state]
        case 'UPDATE':
            //find index and copy expense
            const updateExpenseID = state.findIndex(
                (expense) => expense.id === action.payload.id
            );
            const updateExpense = state[updateExpenseID];
            //update the item using spread operators (this will override key value pairs which are in payload)
            const updatedItem = { ...updateExpense, ...action.payload.data };
            //copy the entire array
            const updateExpenseArr = [...state];
            //override the element in the array with the new updateItem
            updateExpenseArr[updateExpenseID] = updatedItem
            //return new state (i.e. expenses array)
            console.log('context UPDATE', updateExpenseID)
            return updateExpenseArr;
        case 'SET':
            console.log('context SET', action.payload);
            const inverted = action.payload.reverse();
            return inverted;
        case 'DELETE':
            console.log('context DELETE', action.payload);
            return state.filter((expense) => expense.id !== action.payload);
        default:
            return state;
    }
};

//custom provider component returned
function ExpensesContextProvider({ children }) {

    //useReducer() returns 2 elements (state object and dispatch function)
    //dispatch function is used below to dispact actions to expensesReducer
    //2nd argument passed to useReducer is the initial state.
    const [expensesState, dispatch] = useReducer(expensesReducer, []);

    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData });
    };

    function setExpenses(expenses) {
        dispatch({ type: 'SET', payload: expenses });
    };

    function deleteExpense(id) {
        dispatch({ type: 'DELETE', payload: id });
    };

    function updateExpense(id, expenseData) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
    };

    //bunde data and functions into Object
    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        setExpenses: setExpenses,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense
    };

    return (
        <ExpensesContext.Provider value={value}>
            {children}
        </ExpensesContext.Provider>
    );
}

export default ExpensesContextProvider;
