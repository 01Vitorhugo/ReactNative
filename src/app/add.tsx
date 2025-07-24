import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { styles } from "@/styles";
import { addStyles } from "@/styles/add";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";



export default function Add() {
    return (
        <View style={addStyles.container}>
            <View style={addStyles.hearder}>
                <TouchableOpacity onPress={() => router.back()}>
                    <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
                </TouchableOpacity>

                <Text style={addStyles.title}>Novo</Text>
            </View>
            <Text style={addStyles.label}>Selecione uma categoria</Text>
            <Categories />


            <View style={addStyles.form}>
                <Input placeholder="Nome" />
                <Input placeholder="Url" />
            </View>
        </View>
    )
}