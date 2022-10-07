import {StyleSheet, Text, View} from "react-native";

import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AllPokemon} from "./screens/allPokemon/AllPokemon";
import {CurrentPokemon} from "./screens/currentPokemon/CurrentPokemon";
import {RootStackParamsList} from "./screens/types";

const Stack = createNativeStackNavigator<RootStackParamsList>()

export const Main = () => {
    return (<Stack.Navigator>
            <Stack.Screen name="AllPokemon" component={AllPokemon}/>
            <Stack.Screen name="CurrentsPokemon" component={CurrentPokemon}/>
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});