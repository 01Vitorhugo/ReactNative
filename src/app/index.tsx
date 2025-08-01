import { View, Image, TouchableOpacity, FlatList, Modal, Text } from "react-native";
import { styles } from "@/styles";
import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "@/styles/colors";
import { Categories } from "@/components/categories";
import { Link } from "@/components/link";
import { router } from "expo-router";
import { useState } from "react";
import { categories } from "@/utils/categories";


export default function Index() {
    const [category, setCategory] = useState(categories[0].name)

    return (
        // View = Equivale a uma DIV
        // Image = Equivale a uma IMG
        // Text = Equivale a um texto, paragrafo e etc
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("@/assets/logo.png")} style={styles.logo} />


                {/*TouchableOpacity = Serve para dar um efeito ao tocar no icon 
                   MaterialIcons = O expo tem bibliotecas de icones*/}
                <TouchableOpacity onPress={() => router.navigate("/add")}>
                    <MaterialIcons name="add" size={32} color={colors.green[300]} />
                </TouchableOpacity>

            </View>

            <Categories onChang={setCategory} selected={category}/>
            <FlatList
                data={["1", "2", "3", "4", "5",]}
                keyExtractor={(item) => item}
                renderItem={() => (
                    <Link name="Rocketseat" url="https://rocketseat.com.br" onDetails={() => console.log("Clicou")} />

                )}
                style={styles.links}
            />

            <Modal transparent visible={false}>
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalCategory}>Curso</Text>
                            <TouchableOpacity>
                                <MaterialIcons name="close" size={20} color={colors.gray[400]} />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.modalLinkName}>
                            Rocketset
                        </Text>

                        <Text style={styles.modalUrl}>
                            https://Rocketset.com.br
                        </Text>
                    </View>
                </View>
            </Modal>


        </View>
    )
}