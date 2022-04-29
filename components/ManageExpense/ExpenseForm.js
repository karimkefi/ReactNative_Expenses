import { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Keyboard } from 'react-native';

import Input from './Input';
import CustomButton from '../UI/CustomButton';


function ExpenseForm({ submitButtonLabel, onCancel, onSubmit }) {

    const [inputValues, setInputValues] = useState({
        date: '',
        amount: '',
        description: ''
    });


    //generic function to update any of the state values
    //this function can be used for all inputs below
    function inputChangeHandler(inputIdentifier, enteredValue) {
        //update current state using function (rather than just passing in value to "setInputValues")
        //also [inputIdentifier] allows to access the key after passing in a variable key name "inputIdentifier"
        setInputValues((currentInputValues) => {
            return {
                ...currentInputValues,
                [inputIdentifier]: enteredValue
            }
        })
    };

    function submitHandler() {
        const expenseData = {
            date: new Date(inputValues.date),
            amount: +inputValues.amount,
            description: inputValues.description,
        }
        onSubmit(expenseData)
    };

    return (
        <Pressable onPress={() => { Keyboard.dismiss() }} >
            <View style={styles.form} >
                <Text style={styles.title}>Your Expense</Text>
                <View style={styles.inputRow}>
                    <Input style={styles.inputStyle} label="Amount" textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: inputChangeHandler.bind(this, 'amount'),
                        value: inputValues.amount,
                    }}
                    />
                    <Input style={styles.inputStyle} label="Date" textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: inputChangeHandler.bind(this, 'date'),
                        value: inputValues.date,
                    }}
                    />
                </View>
                <Input label="Description" textInputConfig={{
                    multiline: true,
                    onChangeText: inputChangeHandler.bind(this, 'description'),
                    value: inputValues.description,
                }}
                />
                <View style={styles.buttonContainer}>
                    <CustomButton onPress={onCancel} mode='flat' style={styles.button}>
                        Cancel
                    </CustomButton>
                    <CustomButton onPress={submitHandler} style={styles.button}>
                        {submitButtonLabel}
                    </CustomButton>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    form: {
        marginTop: 40,
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputStyle: {
        flex: 1,
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 15,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        minWidth: 120,
        marginHorizontal: 10,
    }
});


export default ExpenseForm;
