import React, { useCallback, useEffect, useState } from "react";
import { VStack, Text, SectionList, Heading } from "native-base";
import { Header } from "../Components/Header";
import { DietPercentageCard } from "../Components/DietPercentageCard";
import { Button } from "../Components/Button";
import { FoodCard } from "../Components/FoodCard";
import { SafeAreaView } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../routes/app.routes";
import { getAllFood } from "../storage/food/foodgetAll";

export function Home() {
    const navigation = useNavigation<AppNavigatorRoutesProps>()
    const [foods, setFoods] = useState<string[]>([]);

    async function fetchFoodRegister() {
        try {
            const data = await getAllFood()
            console.log(data)
            setFoods(data)
        } catch (err) {
            console.log(err)
        }
    }
    function handleStatistics(){
        navigation.navigate('statistics')
    }

    function handleDietRegister(){
        navigation.navigate('dietRegister')
    }

    function handleGoQuery(){
        navigation.navigate('query')
    }

    useFocusEffect(
        useCallback(() => {
          fetchFoodRegister();
        }, [])
      );

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <VStack flex={1} bg="white" px={8}>
                        <Header />
                        <DietPercentageCard background="green.light"  onPress={handleStatistics}/>
                        <Text mt={6} mb={3}>Refeições</Text>
                        <Button title="+ Nova refeição" onPress={handleDietRegister}/>
                   
                    </VStack >
        </SafeAreaView>
     
    );
}
