import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import { THEME } from "./src/utils/theme";
import { DietRegister } from "./src/screens/DietRegister";
import { Routes } from "./src/routes";


export default function App() {

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
        <Routes />
    </NativeBaseProvider>
  );
}