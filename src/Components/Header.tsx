import { HStack, Image, Text } from "native-base";
import Logo from '../assets/Logo.png'
import { Platform } from "react-native";

export function Header() {
    return (
        <HStack mt={Platform.OS === 'android' ? 12 : 3} justifyContent={"space-between"} alignItems={"center"} >
            <Image source={Logo} alt="LogoImage" />
            <Image source={{ uri: "https://github.com/arturoburigo.png" }} h={12} w={12} rounded={"full"} alt="UserPhoto" />
        </HStack >
    )
}