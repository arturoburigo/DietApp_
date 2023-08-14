import { Button as NativeBaseButton, Text } from "native-base";

type Props = {
    title: string
}

export function Button({ title }: Props) {
    return (
        <NativeBaseButton py={4} bg={"gray.2"}>
            <Text color={"white"} fontSize={16}>{title}</Text>
        </NativeBaseButton>
    )
}