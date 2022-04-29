import { createContext, useReducer } from 'react';

const DUMMYEXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e2',
        description: 'Trousers',
        amount: 89.29,
        date: new Date('2022-01-05')
    },
    {
        id: 'e3',
        description: 'Bananas',
        amount: 1.99,
        date: new Date('2021-12-01')
    },
    {
        id: 'e4',
        description: 'Book',
        amount: 7.59,
        date: new Date('2022-02-10')
    },
    {
        id: 'e5',
        description: 'Book fiction',
        amount: 12.60,
        date: new Date('2022-04-27')
    },
];

//Creates a Context object. When React renders a component that subscribes to this Context object 
//it will read the current context value from the closest matching Provider 
export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, { description, amount, date }) => { },
});

//function of the reducer is to return a new state
function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const randomID = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: randomID }, ...state]
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
            console.log('ovovovoovovoovov', updateExpenseID)
            return updateExpenseArr
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload)
        default:
            return state;
    }
};

//custom provider component returned
function ExpensesContextProvider({ children }) {

    //useReducer returns 2 elements (state object and dispatch function)
    //dispatch function is used below to dispact actions to expensesReducer
    //2nd argument passed to useReducer is the initial state.
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMYEXPENSES);

    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData });
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
        deleteExpense: deleteExpense,
        updateExpense: updateExpense
    };

    return (
        <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
    );
}

export default ExpensesContextProvider;
