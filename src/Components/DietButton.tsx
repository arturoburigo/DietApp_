import { Pressable, Circle, HStack, Text, IPressableProps, IIconButtonProps } from "native-base";

type Props = IPressableProps & IIconButtonProps & {
    type: 'Sim' | 'Nao'
    isActive: boolean
    width: string
}

export function DietButton({ type, width, isActive, ...rest }: Props) {
    const buttonText = type === 'Sim' ? 'Sim' : 'Não';

    return (
        <Pressable 
            bg="#EFF0F0" 
            h={14} 
            w={width} 
            isPressed={isActive}
            _pressed={{
                background: type =='Sim' ? "#CBE4B4" : "#F3BABD",
                borderColor: type == 'Sim' ? "#639339" : '#BF3B44', 
                borderWidth: 2
                }}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"lg"}
            {...rest}
            >
            <HStack alignItems="center" justifyContent="center">
                <Circle size={3} bg={type == 'Sim' ? 'green.600' : 'red.600' } mr={3} />
                <Text fontWeight="bold">{buttonText}</Text>
            </HStack>
        </Pressable>
    );
}