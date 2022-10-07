import {createAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api, Pokemon, PokemonItem} from "../../api/api";


export const getAllPokemon = createAsyncThunk<PokemonItem[] | undefined, void>(
    'root/getAllPokemon',
    async (_) => {
        try {
            const resp = await api.getAllPokemon()
            return resp.data.results
        } catch (e) {
            console.log('getAllPokemon', e)
        }
    })


export const getCurrentPokemon = createAsyncThunk<Pokemon | undefined, string>(
    'root/getCurrentPokemon',
    async (url) => {
        try {
            const resp = await api.getPokemonById(url)
            return resp.data
        } catch (e) {
            console.log('getCurrentPokemon', e)
        }
    })

export const cleanCurrentPokemon = createAction('root/cleanCurrentPokemon')

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        allPokemon: [] as PokemonItem[],
        currentPokemon: {} as Pokemon
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllPokemon.fulfilled, (state, action) => {
            state.allPokemon = action.payload ? action.payload : []
        }).addCase(getCurrentPokemon.fulfilled, (state, action) => {
            state.currentPokemon = action.payload ? action.payload : {} as Pokemon
        }).addCase(cleanCurrentPokemon, (state) => {
            state.currentPokemon = {} as Pokemon
        })
    }
})

export const root = rootSlice.reducer