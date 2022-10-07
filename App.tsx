import {Main} from "./src/Main";
import {NavigationContainer} from "@react-navigation/native";
import {StatusBar} from "expo-status-bar";
import {Provider} from "react-redux";
import {store} from "./src/store/store";

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <StatusBar/>
                <Main/>
            </NavigationContainer>
        </Provider>
    );
}


