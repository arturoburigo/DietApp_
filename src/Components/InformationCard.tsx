import { VStack, Text } from "native-base";

type Props = {
    number: number;
    description: string;
    background: string;
    width: string;

}

export function InformationCard({ number, description, width, background }: Props) {
    return (
        <VStack bg={background} w={width} py={3} mb={2} borderRadius={"md"} px={3} >
            <Text fontWeight={"bold"} fontSize={"xl"} textAlign={"center"}>{number}</Text>
            <Text textAlign={"center"} fontSize={"sm"}>{description}</Text>
        </VStack>
    )
}