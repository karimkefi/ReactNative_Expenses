import { View, Pressable, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function CustomButton({ children, onPress, mode, style }) {
    return (
        <View style={style}>
            <Pressable onPress={onPress} style={({ pressed }) => { pressed ? styles.pressed : null }}>
                <View style={[styles.button, mode === "flat" ? styles.flat : null]}>
                    <Text style={[styles.buttonText, mode === "flat" ? styles.flatText : null]}>
                        {children}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary500,
    },
    flat: {
        backgroundColor: 'transparent',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    flatText: {
        color: GlobalStyles.colors.primary200
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: GlobalStyles.colors.primary100,
        borderRadius: 4,
    }
});

export default CustomButton;