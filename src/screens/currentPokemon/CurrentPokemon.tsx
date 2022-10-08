import {Text, View, Image, StyleSheet} from "react-native";
import {CurrentsPokemonPropsType} from "../types";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {cleanCurrentPokemon, getCurrentPokemon} from "../../store/reducers/root";
import {WIDTH} from "../../constants/constants";

export const CurrentPokemon = ({route}: CurrentsPokemonPropsType) => {
    const {url} = route.params
    const currentPokemon = useAppSelector(state => state.root.currentPokemon)
    const dispatch = useAppDispatch()

    useEffect(() => {
            dispatch(getCurrentPokemon(url))
            return () => {
                dispatch(cleanCurrentPokemon())
            }
        }, []
    )

    return <View style={styles.container}>
        {Object.keys(currentPokemon).length ? <View>
            <Image style={{width: 200, height: 200}}
                   source={{uri: currentPokemon.sprites.other['official-artwork'].front_default}}/>
            <Text style={styles.name}> {currentPokemon.name}
            </Text></View> : <View><Text>Loading...</Text>
        </View>}
    </View>
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    name: {
        paddingLeft: 50,
        fontSize: 22
    }
})