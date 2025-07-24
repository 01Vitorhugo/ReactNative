import { colors } from "@/styles/colors"
import { StyleSheet } from "react-native"

export const categoryStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 7, 
    },

    name: {
        fontSize: 16,
        fontWeight: "600",
        color: colors.gray[400]
    }

})