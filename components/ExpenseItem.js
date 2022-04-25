import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '../constants/styles'

import { getFormattedDate } from '../utility/date';

function ExpenseItem({ id, description, amount, date }) {

    const navigation = useNavigation();

    function expensePressedHandler() {
        navigation.navigate('ManageExpense', {
            expenseID: id,
        })
    }

    return (
        <Pressable onPress={expensePressedHandler} style={({ pressed }) => pressed ? styles.pressed : null }>
            <View style={styles.expenseItem}>
                <View >
                    <Text style={[styles.textBase, styles.textDescription]}>{description}</Text>
                    <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.textAmount}>{amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>


    )
};

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.75,
    },
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
    },
    textBase: {
        color: GlobalStyles.colors.primary50,
    },
    textDescription: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        minWidth: 80,
    },
    textAmount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold',
    },

});

export default ExpenseItem;