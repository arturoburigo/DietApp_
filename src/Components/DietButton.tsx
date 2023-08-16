import { Button, Circle, HStack, Text } from "native-base";

type Props = {
    type: 'Sim' | 'Nao'
    width: string
}

export function DietButton({ type, width }: Props) {
    const circleColor = type === 'Sim' ? 'green.700' : 'red.600';
    const buttonText = type === 'Sim' ? 'Sim' : 'Não';

    return (
        <Button bg="#EFF0F0" h={14} w={width}>
            <HStack alignItems="center" justifyContent="center">
                <Circle size={3} bg={circleColor} mr={3} />
                <Text fontWeight="bold">{buttonText}</Text>
            </HStack>
        </Button>
    );
}
