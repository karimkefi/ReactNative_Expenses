import { View, StyleSheet } from "react-native";

import { GlobalStyles } from "../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

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
        date: new Date('2022-02-18')
    },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMYEXPENSES} periodName={expensesPeriod}/>
            <ExpensesList expenses={DUMMYEXPENSES}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: GlobalStyles.colors.primary700,
        flex: 1,
    },
});

export default ExpensesOutput;