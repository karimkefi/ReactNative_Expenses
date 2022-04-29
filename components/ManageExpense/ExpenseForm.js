import { View, Text, StyleSheet } from 'react-native';

import Input from './Input';


function ExpenseForm() {

    function amountChangeHandler() {

    };


    return (
        <View style={styles.form} >
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputRow}>
                <Input style={styles.inputStyle} label="Amount" textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: amountChangeHandler,
                }}
                />
                <Input style={styles.inputStyle} label="Date" textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxLength: 10,
                    onChangeText: () => { },
                }}
                />
            </View>
            <Input label="Description" textInputConfig={{
                multiline: true,
                onChangeText: () => { },
            }}
            />
        </View>
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
    }
});


export default ExpenseForm;
