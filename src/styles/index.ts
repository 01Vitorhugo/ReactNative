import { StyleSheet } from "react-native"
import { colors } from "./colors"



export const styles = StyleSheet.create({
        container: {
        flex: 1,
        paddingTop: 32,
       
    },

    header: {
        width: "100%",
        paddingHorizontal: 24,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between"

    },

    logo: {
        height: 32,
        width: 38

    },
    links: {
        borderTopColor: colors.gray[600],
        borderTopWidth: 1
    },
    modal: {
        flex: 1,
        justifyContent: "flex-end"
    },
    modalContent: {
        backgroundColor: colors.gray[900],
        borderTopWidth: 1,
        borderTopColor: colors.gray[800],
        paddingBottom: 42,
        padding: 26
    },
    modalHeader: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 32
    },
    modalCategory: {
        flex: 1,
        fontSize: 16,
        fontWeight: "500",
        color: colors.gray[400]
    },
    modalLinkName: {
        fontSize: 18,
        fontWeight: "600",
        color: colors.gray[200]
    },
    modalUrl: {
        fontSize: 14,
        color: colors.gray[400]
    }

    




})