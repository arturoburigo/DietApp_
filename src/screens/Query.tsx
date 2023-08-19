import { HStack, Heading, Text, VStack } from "native-base";
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Alert, TouchableOpacity } from "react-native";
import {Button} from '../Components/Button'


export function Query(){

    function handleRemoveFood() {
        Alert.alert(
            'Excluir Refeição',  // Título do alerta
            'Deseja realmente excluir o registro da refeição?',  // Mensagem do alerta
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Sim, Excluir',
                    style: 'destructive',  // Estilo que indica uma ação destrutiva (iOS)
                    onPress: () => {
                        // Aqui vai o código para realmente remover a refeição
                        console.log('Refeição excluída');
                    }
                }
            ]
        );
    }
    


    return (
        <VStack flex={1}>
            <HStack bg={"gray.200"} py={24} px={8} alignItems={"center"} justifyContent="space-between" mt={-5}>
                <TouchableOpacity >
                    <Feather name="arrow-left" size={26} />
                </TouchableOpacity>
                <Text fontWeight={"bold"} fontSize={"lg"}>Refeicao</Text>
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
                bg={"white"} 
                justifyContent={"space-between"} // Adicione uma cor de fundo para tornar a sobreposição visível
            >
                <VStack>
                    <Heading mb={3}>Sanduiche</Heading>
                    <Text>Sanduíche de pão integral com atum e salada de alface e tomate</Text>
                    <Text mt={6} fontWeight={"bold"} mb={2}>Data e hora</Text>
                    <Text>12/08/2022 as 16:00</Text>
                </VStack>
                <VStack space={2}>
                    <Button title="Editar refeicao" />

                    <Button title="Excluir refeicao" variant={"outline"} onPress={handleRemoveFood}/>
                </VStack>
            </VStack>
        </VStack >
    )
}