import { HStack, Text, VStack, Button } from "native-base";
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Platform, TouchableOpacity } from "react-native";
import { Input } from "../Components/Input";

export function DietRegister() {
    const [date, setDate] = useState(new Date());
    const [showDate, setShowDate] = useState(false);
    const [showTime, setShowTime] = useState(false);

    const onChangeDate = (event: any, selectedDate?: Date) => {
        const currentDate = selectedDate || date;
        setShowDate(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showDatepicker = () => {
        setShowDate(true);
    };

    const showTimepicker = () => {
        setShowTime(true);
    };
    return (
        <VStack flex={1}>
            <HStack bg={"gray.300"} py={16} px={7} alignItems={"center"} justifyContent="space-between" mt={-5}>
                <TouchableOpacity >
                    <Feather name="arrow-left" size={26} />
                </TouchableOpacity>
                <Text fontWeight={"bold"} fontSize={"lg"}>Nova Refeicao</Text>
                <Text></Text>
            </HStack>
            <VStack
                flex={1}
                py={8}
                px={8}
                marginTop={-45}  // Esta propriedade faz com que o VStack ocupe parte do HStack acima
                borderTopLeftRadius={20}  // Arredonda a borda superior esquerda
                borderTopRightRadius={20}  // Arredonda a borda superior direita
                bg={"white"}  // Adicione uma cor de fundo para tornar a sobreposição visível
            >
                <Input title="Nome" />
                <Input title="Descricao" multilineEnabled />
                <HStack>

                </HStack>


            </VStack>
        </VStack >
    )
}
