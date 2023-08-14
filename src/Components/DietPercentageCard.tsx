import { Button, Text, VStack, Icon } from "native-base";
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native";

type Props = {
    background: string
}

export function DietPercentageCard({ background }: Props) {
    return (
        <TouchableOpacity>
            <VStack mt={10} bg={background} py={3} rounded={"md"}>
                <Text fontWeight={"bold"} fontSize={"3xl"} textAlign={"center"}>90,86%</Text>
                <Text textAlign={"center"}>das refeições dentro da dieta</Text>
            </VStack>
        </TouchableOpacity>
    )
}
