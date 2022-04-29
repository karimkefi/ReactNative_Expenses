import { View, Text, StyleSheet } from "react-native";

import { GlobalStyles } from "../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";


function ExpensesOutput({ expenses, expensesPeriod, fallbackText }) {
    let content = <Text style={styles.infoText}>{fallbackText}</Text>;

    if (expenses.lenth > 0) { 
        content = <ExpensesList expenses={expenses} />;
    }

    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
            {content}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: GlobalStyles.colors.primary700,
        flex: 1,
    },
    infoText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 30,
    }
});

export default ExpensesOutput;