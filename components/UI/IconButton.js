import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function IconButton({ iconName, size, color, onPress }) {
    return <Pressable onPress={onPress} style={({ pressed }) => { pressed ? styles.pressed : null} }>
        <View style={styles.buttonContainer}>
            <Ionicons name={iconName} size={size} color={color} />
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        margin: 8,
        marginHorizontal: 8,
        marginVertical: 2
    },
    pressed: {
        opacity: 0.75,
    }
});

export default IconButton;
