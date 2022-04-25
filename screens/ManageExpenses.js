import { useLayoutEffect } from 'react';
import { Text } from 'react-native';

function ManageExpense({ route, navigation }) {

    //"?" at the end of params allows JavaScript to check if the param has any values
    //if it didnt (i.e. it was an empty object) then we would get an error when trying to find an undefined "expenseID"
    const editExpenseID = route.params?.expenseID;

    //"!!" == "not not" is a JavaScript trick to conver a value into a boolean
    const isEditing = !!editExpenseID

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense"
        })
    }, [navigation, isEditing]);


    return (
        <Text>Manage Expense Screen</Text>
    )
}

export default ManageExpense;
