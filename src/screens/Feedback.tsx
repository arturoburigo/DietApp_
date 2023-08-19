import { Heading, Image, Text, VStack } from "native-base";
import onDiet from '../assets/onDiet.png'
import notOnDiet from '../assets/notOnDiet.png'
import { Button } from "../Components/Button";

type Props = {
    isOnDiet: boolean
}


export function Feedback({isOnDiet = false}: Props) {
    return (
        <VStack flex={1} justifyContent={"center"} alignItems={"center"} px={8}>
            <Heading fontWeight={"semibold"} color={isOnDiet ? 'green.600' : 'red.600'}>{isOnDiet ? 'Continue assim!' : 'Que pena!'}</Heading>
            <Text mt={4} mb={4} textAlign={"center"}>
                {isOnDiet ? (
                    <>Você continua <Text fontWeight="bold">dentro da dieta</Text>. Muito bem!</>
                ) : (
                    <>Você <Text fontWeight="bold">saiu da dieta</Text>. dessa vez, mas continue se esforçando e não desista!</>
                )}
            </Text>
            <Image source={isOnDiet ? onDiet : notOnDiet} mb={10}/>
            <Button title="Ir para a pagina inicial" />
        </VStack>
    )
}
