import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styleButton } from "./button";

type Props = TouchableOpacityProps & {
    title: string
}

export function Button({title, ...rest}: Props){

    return(
        <TouchableOpacity style={styleButton.container} activeOpacity={0.7} {...rest}>
            <Text style={styleButton.title}>{title}</Text>
        </TouchableOpacity>
    )
}