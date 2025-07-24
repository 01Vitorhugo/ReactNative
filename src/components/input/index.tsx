import { TextInput, TextInputProps } from "react-native";
import { styles } from "./input";



export function Input({...rest}: TextInputProps){
    return(
        <TextInput style={styles.container} {...rest} />
    )
}