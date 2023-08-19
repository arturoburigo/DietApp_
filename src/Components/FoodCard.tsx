import { Text, HStack, View, Button } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    isHealthy: boolean;
    title: string;
    hour: string;
};

export function FoodCard({ isHealthy, title, hour, ...rest }: Props) {
    return (
        <TouchableOpacity {...rest}>
            <HStack px={3} mt={2} py={4} borderWidth={1} borderColor={"gray.300"} rounded={"md"} alignItems={"center"} justifyContent={"space-between"}>
                <HStack>
                    <Text fontWeight={"bold"}>{hour}</Text>
                    <Text color={"gray.300"} fontWeight={"bold"} px={2}> | </Text>
                    <Text>{title}</Text>
                </HStack>
                <HStack>
                    <View background={isHealthy ? "green.mid" : "red.mid"} rounded={"full"} height={4} w={4} />
                </HStack>
            </HStack>
        </TouchableOpacity>

    );
}
