import {NavigationProp, useNavigation} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type RootStackParamsList = {
    AllPokemon: undefined,
    CurrentsPokemon: {
        url: string
    }
}

export type CurrentsPokemonPropsType = NativeStackScreenProps<RootStackParamsList, 'CurrentsPokemon'>

export type NavigationUseType = NavigationProp<RootStackParamsList>

export const useAppNavigation = () => useNavigation<NavigationUseType>()
