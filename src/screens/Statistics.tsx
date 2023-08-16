import { VStack, Text, HStack } from "native-base";
import { InformationCard } from "../Components/InformationCard";
import { Feather } from '@expo/vector-icons'
import { StatusBar, TouchableOpacity } from "react-native";

export function Statistics() {
    return (
        <VStack flex={1}>
            <VStack justifyContent={"center"} bg={"green.mid"} py={"12"} px={7}>
                <TouchableOpacity>
                    <Feather name="arrow-left" size={26} color={'#639339'} />
                </TouchableOpacity>
                <Text fontWeight={"bold"} fontSize={"3xl"} textAlign={"center"}>90,86%</Text>
                <Text textAlign={"center"}>das refeições dentro da dieta</Text>
            </VStack>
            <VStack flex={1} alignItems={"center"} px={8}>
                <Text fontWeight={"bold"} mt={8} mb={8}>Estatisticas gerais</Text>
                <InformationCard background="gray.200" description="das refeições dentro da dieta" number={32} width="full" />
                <InformationCard background="gray.200" description="refeições registradas" number={32} width="full" />
                <HStack justifyContent={"space-between"} space={4}>
                    <InformationCard width="48%" background="green.mid" description="refeições registradas da deta" number={32} />
                    <InformationCard width="48%" background="red.mid" description="refeições registradas da deta" number={32} />
                </HStack>
            </VStack>
        </VStack>
    )
}
