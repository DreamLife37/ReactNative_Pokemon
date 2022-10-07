import {View, FlatList, ListRenderItem, TouchableOpacity, Text, StyleSheet} from "react-native";
import {useEffect} from "react";
import {PokemonItem} from "../../api/api";
import {WIDTH} from "../../constants/constants";
import {useAppNavigation} from "../types";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {getAllPokemon} from "../../store/reducers/root";

export const AllPokemon = () => {

    const navigation = useAppNavigation()
    // const [allPokemon, setAllPokemon] = useState<PokemonItem[]>()
    // useEffect(() => {
    //     api.getAllPokemon().then((resp) => {
    //         //console.log(JSON.stringify(resp.data.results, null, 2))
    //         setAllPokemon(resp.data.results)
    //     })
    // })

    const allPokemon = useAppSelector(state => state.root.allPokemon)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getAllPokemon())
    }, [])
    const render: ListRenderItem<PokemonItem> = ({item}) => {
        return <View style={styles.item}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('CurrentsPokemon', {url: item.url})
            }
            }>
                <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>
        </View>
    }
    return <View style={styles.container}>
        <FlatList data={allPokemon}
                  numColumns={2}
                  columnWrapperStyle={{justifyContent: 'space-between'}}
                  renderItem={render}
                  keyExtractor={(item, index) => `${item.name}.${index}`}/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    item: {
        paddingHorizontal: 5,
        borderWidth: 1,
        paddingVertical: 7,
        marginVertical: 5,
        width: (WIDTH - 20 * 2) / 2 - 5,
        backgroundColor: '#b6a332',
        borderRadius: 5,
        alignItems: 'center'
    },
    name: {fontSize: 22}
})