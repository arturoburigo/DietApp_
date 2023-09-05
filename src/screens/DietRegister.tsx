import React, { useState } from 'react';
import { HStack, Text, VStack } from "native-base";
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { Input } from "../Components/Input";
import { Button } from '../Components/Button';
import { DietButton } from "../Components/DietButton";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from '../routes/app.routes';
import { FoodRegisterCreate } from '../storage/food/foodRegisterCreate';


export function DietRegister() {
    const [foodName, setFoodName] = useState('')
    const [description, setDescription] = useState('')
    const [hour, setHour] = useState('')
    const [date, setDate] = useState('')
    const [onDiet, setIsOnDiet] = useState(false)


    const [activeButton, setActiveButton] = useState('');
    const navigation = useNavigation<AppNavigatorRoutesProps>()

    function handleGoBack(){
        navigation.goBack()
    }

    function handleFeedback(){
        console.log(activeButton)

    }

    async function handleFoodRegister(){
        try{
            await FoodRegisterCreate(foodName, description,date, hour, onDiet)
            console.log({foodName, description, hour, date, onDiet})
            navigation.navigate('feedback', {activeButton})
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <VStack flex={1} background={'white'}>
            <HStack bg={"gray.200"} py={24} px={7} alignItems={"center"} justifyContent="space-between" mt={-5}>
                <TouchableOpacity>
                    <Feather name="arrow-left" size={26} onPress={handleGoBack} />
                </TouchableOpacity>
                <Text fontWeight={"bold"} fontSize={"lg"}>Nova Refeicao</Text>
                <Text></Text>
            </HStack>
            <VStack
                flex={1}
                justifyContent="space-between"
                mb={2}
                py={8}
                px={8}
                marginTop={-65}
                borderTopLeftRadius={20}
                borderTopRightRadius={20}
                bg={"white"}
            >
                <VStack>
                    <Input title="Nome" onChangeText={setFoodName}/>
                    <Input title="Descricao" multilineEnabled height="20" onChangeText={setDescription}/>
                    <HStack justifyContent={"space-between"}>
                        <Input title="Date" width="48%" onChangeText={setDate}/>
                        <Input title="Hour" width="48%" onChangeText={setHour}/>
                    </HStack>
                    <Text fontWeight={"bold"} fontSize={"sm"} mb={4}>Esta dentro da dieta?</Text>
                    <HStack justifyContent={"space-between"}>
                    <DietButton 
                        type="Sim" 
                        width="48%" 
                        isActive={activeButton === 'Sim'} 
                        onPress={() => {
                            setActiveButton('Sim');
                            setIsOnDiet(true);
                        }} 
                    />
                    <DietButton 
                        type="Nao" 
                        width="48%" 
                        isActive={activeButton === 'Nao'} 
                        onPress={() => {
                            setActiveButton('Nao');
                            setIsOnDiet(false);
                        }} 
                    />

                    </HStack>
                </VStack>

                <VStack>
                    <Button title="Cadastrar" onPress={handleFoodRegister} />
                </VStack>
            </VStack>
        </VStack>
    )
}
