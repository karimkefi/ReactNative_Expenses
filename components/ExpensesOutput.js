import { View, StyleSheet } from "react-native";

import { GlobalStyles } from "../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";


function ExpensesOutput({ expenses, expensesPeriod }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
            <ExpensesList expenses={expenses}/>
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