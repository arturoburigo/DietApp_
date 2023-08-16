import { HStack, Text, VStack } from "native-base";
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Platform, StatusBar, TouchableOpacity } from "react-native";
import { Input } from "../Components/Input";
import {Button} from '../Components/Button'
import { DietButton } from "../Components/DietButton";

export function DietRegister() {
    const [date, setDate] = useState(new Date());

    return (
        <VStack flex={1}>
            <HStack bg={"gray.200"} py={24} px={7} alignItems={"center"} justifyContent="space-between" mt={-5}>
                <TouchableOpacity >
                    <Feather name="arrow-left" size={26} />
                </TouchableOpacity>
                <Text fontWeight={"bold"} fontSize={"lg"}>Nova Refeicao</Text>
                <Text></Text>
            </HStack>
            <VStack
                mb={2}
                flex={1}
                py={8}
                px={8}
                marginTop={-65}  // Esta propriedade faz com que o VStack ocupe parte do HStack acima
                borderTopLeftRadius={20}  // Arredonda a borda superior esquerda
                borderTopRightRadius={20}  // Arredonda a borda superior direita
                bg={"white"}  // Adicione uma cor de fundo para tornar a sobreposição visível
            >
                <Input title="Nome" />
                <Input title="Descricao" multilineEnabled height="20"/>
                <HStack justifyContent={"space-between"}>
                    <Input title="Date" width="48%" />
                    <Input title="Hour" width="48%"/>
                </HStack>
                <Text fontWeight={"bold"} fontSize={"sm"} mb={4}>Esta dentro da dieta?</Text>
                <HStack justifyContent={"space-between"}>
                    <DietButton type="Sim" width="48%"/>
                    <DietButton type="Nao" width="48%"/>
                </HStack>
            </VStack>
        </VStack >
    )
}
