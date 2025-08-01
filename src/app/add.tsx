import { Button } from "@/components/button";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { addStyles } from "@/styles/add";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";



export default function Add() {
    const [category, setCategory] = useState<string>()
    const [name, setName] = useState("")
    const [url, setUrl] = useState<string>()

    function handleAdd(){
        if(!category){
            return Alert.alert("Categoria", "Selecione uma categoria")
        }

        if(!name.trim()){
            return Alert.alert("Nome", "Informe o nome")
        }

        if(!url?.trim()){
            return Alert.alert("URL", "Informe a URL ")
        }

        console.log({category, name, url})
    }


    return (
        <View style={addStyles.container}>
            <View style={addStyles.hearder}>
                <TouchableOpacity onPress={() => router.back()}>
                    <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
                </TouchableOpacity>

                <Text style={addStyles.title}>Novo</Text>
            </View>
            <Text style={addStyles.label}>Selecione uma categoria</Text>
            <Categories onChang={setCategory} selected={category}/>


            <View style={addStyles.form}>


                <Input placeholder="Nome" onChangeText={setName} />
                <Input placeholder="URL" onChangeText={setUrl}/>

                <Button title="Adicionar" onPress={handleAdd} />
            </View>
        </View>
    )
}