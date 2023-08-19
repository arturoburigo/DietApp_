import { Button as NativeBaseButton, Text, IButtonProps } from "native-base";

type Props = IButtonProps & {
    title: string,
    variant?: "solid" | "outline";
}

export function Button({ title, variant = 'solid', ...rest }: Props) {
    return (
        <NativeBaseButton 
            py={4} 
            px={8}
            bg={variant === "outline" ? "transparent" : "gray.2"} 
            borderWidth={variant === "outline" ? 1 : 0}
            _pressed={{
                bg: variant === "outline" ? "gray.500" : "gray.4",
              }}
            {...rest}>
            <Text color={variant === "outline" ? "black" : "white"} fontSize={"sm"} fontWeight={"bold"}>{title}</Text>
        </NativeBaseButton>
    )
}