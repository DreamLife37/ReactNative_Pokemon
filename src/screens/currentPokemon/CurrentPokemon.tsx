import {Text, View, Image} from "react-native";
import {CurrentsPokemonPropsType} from "../types";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {cleanCurrentPokemon, getCurrentPokemon} from "../../store/reducers/root";

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

    return <View>
        <Text>All Pokemon</Text>
        {Object.keys(currentPokemon).length ? <View>
            <Image style={{width: 200, height: 200}}
                   source={{uri: currentPokemon.sprites.other['official-artwork'].front_default}}/>
            <Text> {currentPokemon.name}
            </Text></View> : <View><Text>Loading...</Text>
        </View>}
    </View>
}
