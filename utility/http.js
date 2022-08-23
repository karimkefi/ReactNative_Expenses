import axios from 'axios';

const BASE_URL = 'https://rn-expense-e4879-default-rtdb.europe-west1.firebasedatabase.app';

export async function storeExpense(expenseData, token) {
    const response = await axios.post(
        BASE_URL + '/expenses.json' + '?auth=' + token,
        expenseData
    );
    const id = response.data.name;
    return id;
}

export async function fetchExpenses(token) {
    const response = await axios.get(BASE_URL + '/expenses.json' + '?auth=' + token);

    const expenses = [];
    for (const key in response.data) {
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description,
        }
        expenses.push(expenseObj)
    }

    return expenses;
}

//we are not awaiting any response, hence we do not need to make this async function.
export function updateExpense(id, expenseData, token) {
    return axios.put(
        BASE_URL + `/expenses/${id}.json` + '?auth=' + token,
        expenseData
    );
};

export async function deleteExpense(id, token) {
    return axios.delete(BASE_URL + `/expenses/${id}.json` + '?auth=' + token);
};
