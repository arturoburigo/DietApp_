import { VStack, Text, Input as NativeBaseInput, IInputProps } from "native-base";

type Props = IInputProps & {
    title: string;
    height?: string;
    width?: string
    multilineEnabled?: boolean; // Nova propriedade
}

export function Input({ title, height, multilineEnabled, width, ...rest }: Props) {
    return (
        <VStack w={width}>
            <Text fontWeight={"bold"} fontSize={"sm"}>
                {title}
            </Text>
            <NativeBaseInput
                mt={2}
                _focus={{
                    bg: "white",
                    borderWidth: 1,
                    borderColor: 'black'
                }}
                py={3}
                fontSize={"md"}
                mb={8}
                h={height}
                textAlignVertical={multilineEnabled ? "top" : undefined} // Aplica se multilineEnabled for true
                style={multilineEnabled ? { alignItems: 'flex-start' } : undefined} // Aplica se multilineEnabled for true
                multiline={multilineEnabled} // Aplica se multilineEnabled for true
                numberOfLines={multilineEnabled ? 4 : undefined} // Aplica se multilineEnabled for true
                {...rest}
            />
        </VStack>
    )
}
