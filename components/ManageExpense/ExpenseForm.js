import { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Keyboard, Alert } from 'react-native';

import Input from './Input';
import CustomButton from '../UI/CustomButton';
import { getFormattedDate } from '../../utility/date'
import { GlobalStyles } from '../../constants/styles';

function ExpenseForm({ submitButtonLabel, onCancel, onSubmit, defaultValues }) {

    //if updating, the pre-populate with "defaultValues" prop
    const [inputs, setInputs] = useState({
        date: {
            value: defaultValues ? getFormattedDate(defaultValues.date) : '',
            isValid: true
        },
        amount: {
            value: defaultValues ? defaultValues.amount.toString() : '',
            isValid: true
        },
        description: {
            value: defaultValues ? defaultValues.description : '',
            isValid: true
        }
    });


    //generic function to update any of the state values
    //this function can be used for all inputs below
    function inputChangeHandler(inputIdentifier, enteredValue) {
        //update current state using function (rather than just passing in value to "setInputs")
        //also [inputIdentifier] allows to access the key after passing in a variable key name "inputIdentifier"
        setInputs((currentInputs) => {
            return {
                ...currentInputs,
                [inputIdentifier]: { value: enteredValue, isValid: true }
            }
        })
    };

    function submitHandler() {
        const expenseData = {
            date: new Date(inputs.date.value),
            amount: +inputs.amount.value,
            description: inputs.description.value,
        }

        //validate form befor submitting
        const amountIsValid = expenseData.amount > 0 && !isNaN(expenseData.amount)
        //"Invalid Date" is what JS will return if you run "new Date('hello')"
        const dateIsValid = expenseData.date.toString() !== "Invalid Date";
        const descriptionIsValid = expenseData.description.trim().length > 0;

        //return before onSubmit if there is anything invalid on form
        if (!dateIsValid || !amountIsValid || !descriptionIsValid) {
            //update current state using function (rather than just passing in value to "setInputs")
            setInputs((currentInputs) => {
                return {
                    amount: { value: currentInputs.amount.value, isValid: amountIsValid },
                    date: { value: currentInputs.date.value, isValid: dateIsValid },
                    description: { value: currentInputs.description.value, isValid: descriptionIsValid },
                }
            })
            return;
        }

        onSubmit(expenseData)
    };

    //if any of values is not valid, the overall form is not valid
    const forIsInvalid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid;

    return (
        <Pressable onPress={() => { Keyboard.dismiss() }} >
            <View style={styles.form} >
                <Text style={styles.title}>Your Expense</Text>
                <View style={styles.inputRow}>
                    <Input style={styles.inputStyle} label="Amount" invalid={!inputs.amount.isValid} textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: inputChangeHandler.bind(this, 'amount'),
                        value: inputs.amount.value,
                    }}
                    />
                    <Input style={styles.inputStyle} label="Date" invalid={!inputs.date.isValid} textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: inputChangeHandler.bind(this, 'date'),
                        value: inputs.date.value,
                    }}
                    />
                </View>
                <Input label="Description" invalid={!inputs.description.isValid} textInputConfig={{
                    multiline: true,
                    onChangeText: inputChangeHandler.bind(this, 'description'),
                    value: inputs.description.value,
                }}
                />
                {forIsInvalid ? <Text style={styles.errorText}>Invalid Input values - please check your entered data!</Text> : null}
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
    },
    errorText: {
        textAlign: 'center',
        color: GlobalStyles.colors.error50,
        margin: 8,
    }
});


export default ExpenseForm;
