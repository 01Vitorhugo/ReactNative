import { MaterialIcons } from "@expo/vector-icons"



type Category = {
    id: string
    name: string
    icons: keyof typeof MaterialIcons.glyphMap
}


export const categories: Category[] = [

    {id: "1", name: "Cursos", icons: "code"},
    {id: "2", name: "Projeto", icons: "folder"},
    {id: "3", name: "Site", icons: "language"},
    {id: "4", name: "Artigo", icons: "newspaper"},
    {id: "5", name: "Video", icons: "movie"},
    {id: "6", name: "Documentação", icons: "content-paste"}
]