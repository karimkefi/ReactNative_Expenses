import { useLayoutEffect } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

import IconButton from '../components/UI/IconButton'
import { GlobalStyles } from '../constants/styles';

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

    function deleteExpenseHandler() { };


    return (

        <View style={styles.container}>
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
