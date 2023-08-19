import { Heading, Image, Text, VStack } from "native-base";
import onDiet from '../assets/onDiet.png'
import notOnDiet from '../assets/notOnDiet.png'
import { Button } from "../Components/Button";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../routes/app.routes";

type Props = {
    isOnDiet?: boolean
}


export function Feedback({isOnDiet = false}: Props) {
    const navigation = useNavigation<AppNavigatorRoutesProps>()

    function handleGoHome(){
        navigation.navigate('home')
    }

    return (
        <VStack flex={1} justifyContent={"center"} alignItems={"center"} px={8} >
            <Heading fontWeight={"semibold"} color={isOnDiet ? 'green.600' : 'red.600'}>{isOnDiet ? 'Continue assim!' : 'Que pena!'}</Heading>
            <Text mt={4} mb={4} textAlign={"center"}>
                {isOnDiet ? (
                    <>Você continua <Text fontWeight="bold">dentro da dieta</Text>. Muito bem!</>
                ) : (
                    <>Você <Text fontWeight="bold">saiu da dieta</Text>. dessa vez, mas continue se esforçando e não desista!</>
                )}
            </Text>
            <Image source={isOnDiet ? onDiet : notOnDiet} mb={10} alt="Ondiet or not image"/>
            <Button title="Ir para a pagina inicial" onPress={handleGoHome}/>
        </VStack>
    )
}
