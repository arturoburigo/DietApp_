import { Button, Text, VStack, Icon, IButtonProps } from "native-base";
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native";

type Props = IButtonProps & {
    background: string
}

export function DietPercentageCard({ background, ...rest }: Props) {
    return (
            <Button mt={10} bg={background} py={3} rounded={"md"} {...rest}>
                <Text fontWeight={"bold"} fontSize={"3xl"} textAlign={"center"}>90,86%</Text>
                <Text textAlign={"center"}>das refeições dentro da dieta</Text>
            </Button>
    )
}
