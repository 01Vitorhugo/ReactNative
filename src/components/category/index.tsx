import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, PressableProps, Text } from "react-native";
import { categoryStyles } from "./category";


// PressableProsp serve para usar todas as funçoes 
type Props = PressableProps & {
    name: string

    // Passando Icon assim para pegar todos os icons da biblioteca
    icon: keyof typeof MaterialIcons.glyphMap
    
    isSelected: boolean
}

// passando o PressableProps como ...rest para usar no Pressable
export function Category({ name, icon, isSelected, ...rest }: Props) {

    // usando if ternario para fazer a condição de trocar a cor
    const color = isSelected ? colors.green[300] : colors.gray[400]

    return (
        <Pressable style={categoryStyles.container} {...rest}>
            <MaterialIcons name={icon} size={16} color={color} />

            {/*Sobrescrevendo a cor caso o color seja verdadeiro, se usar mais de um estilo, tem que colocar entre [] e ,  */}
            <Text style={[categoryStyles.name, { color }]}>{name}</Text>
        </Pressable>
    )
}