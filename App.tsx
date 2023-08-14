import { SafeAreaView, StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import { THEME } from "./src/utils/theme";
import { Home } from "./src/screens/Home";
import { Statistics } from "./src/screens/Statistics";
import { DietRegister } from "./src/screens/DietRegister";

export default function App() {

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <SafeAreaView style={{ flex: 1 }}>
        <DietRegister />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}