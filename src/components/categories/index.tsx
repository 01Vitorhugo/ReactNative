import { categories } from "@/utils/categories";
import { FlatList } from "react-native";
import { Category } from "@/components/category";
import { styles } from "./styles";


export function Categories() {

    return (
        // Tag usada para criar listas
        <FlatList

            // data = da onde esta vindo o conteudo
            data={categories}

            // KeyExtractor =  chave para indicar o objeto
            keyExtractor={(item) => item.id}

            //renderItem =  o que vai ser renderizado
            renderItem={({ item }) => (

                <Category id={item.id} name={item.name} icon={item.icons} isSelected={false} />
            )}

            //horizontal = para a lista ficar na horizontal
            horizontal
            // showsHorizontalScrollIndicator = define se vai ter a barra de rolagem
            showsHorizontalScrollIndicator={false}
            // style = adicionando estilo para a lista em si
            style={styles.container}
            // contentContainerStyle = definindo estilo para o conteudo da lista
            contentContainerStyle={styles.content}
        />
    )
}