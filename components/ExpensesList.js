import { View, FlatList, StyleSheet } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData) {
    return (
        <ExpenseItem  {...itemData.item} />
    )
};

function ExpensesList({ expenses }) {

    return (
        <View>
            <FlatList
                data={expenses}
                keyExtractor={(item) => item.id}
                renderItem={renderExpenseItem}
            />
        </View>

    )
};

const styles = StyleSheet.create({

});

export default ExpensesList;