import { View, Text, TextInput, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function Input({ label, style, textInputConfig, invalid }) {

    const inputStyles = [styles.input];

    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline);
    }

    if (invalid) {
        inputStyles.push(styles.invalidInput);
    }

    //here we are spreading the TextInputConfig into TextInput component
    //therefore keys in this object must match TextInput prop keys (e.g. "placeholder" or "maxLength")
    return (
        <View style={[styles.container, style]}>
            <Text style={[styles.label, invalid ? styles.invalidLabel : null]}>{label}</Text>
            <TextInput style={inputStyles} {...textInputConfig} />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 4,
        marginVertical: 10,
    },
    label: {
        fontSize: 12,
        color: GlobalStyles.colors.primary100,
        marginBottom: 4,
    },
    input: {
        backgroundColor: GlobalStyles.colors.primary100,
        color: GlobalStyles.colors.primary700,
        padding: 8,
        borderRadius: 6,
        fontSize: 18,
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top',
    },
    invalidLabel: {
        color: GlobalStyles.colors.error500
    },
    invalidInput: {
        backgroundColor: GlobalStyles.colors.error50,
    }
});


export default Input;
