import { useLayoutEffect, useContext } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import IconButton from '../components/UI/IconButton'
import { GlobalStyles } from '../constants/styles';
import { ExpensesContext } from '../store/expenses-context'

function ManageExpense({ route, navigation }) {

    const expensesCtx = useContext(ExpensesContext);

    //"?" at the end of params allows JavaScript to check if the param has any values
    //if it didnt (i.e. it was an empty object) then we would get an error when trying to find an undefined "expenseID"
    const editExpenseID = route.params?.expenseID;

    //"!!" == "not not" is a JavaScript trick to conver a value into a boolean
    const isEditing = !!editExpenseID

    //selected expense if updating... this will be used to prepopulate the form
    const selectedExpense = expensesCtx.expenses.find(
        (expense) => expense.id === editExpenseID
    )

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense"
        })
    }, [navigation, isEditing]);

    function deleteExpenseHandler() {
        expensesCtx.deleteExpense(editExpenseID);
        navigation.goBack();
    };

    function cancelHandler() {
        navigation.goBack()
    };

    function confirmHandler(expenseData) {
        if (isEditing) {
            expensesCtx.updateExpense(editExpenseID, expenseData);
        } else {
            expensesCtx.addExpense(expenseData);
        }
        navigation.goBack()
    };


    return (

        <View style={styles.container}>
            <ExpenseForm
                submitButtonLabel={isEditing ? 'Update' : 'Add'}
                onCancel={cancelHandler}
                onSubmit={confirmHandler}
                defaultValues={selectedExpense}
            />

            {isEditing ?
                <View style={styles.deleteButtonContainer} >
                    <IconButton
                        iconName="trash"
                        size={36}
                        color={GlobalStyles.colors.error500}
                        onPress={deleteExpenseHandler}
                    />
                </View>
                : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800,
    },
    deleteButtonContainer: {
        marginTop: 16,
        padding: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    },
});

export default ManageExpense;
