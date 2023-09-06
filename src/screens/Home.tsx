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
    const [foods, setFoods] = useState<FoodSection[]>([]);


    type Food = {
        foodDate: string;
        foodDescription: string;
        foodHour: string;
        foodName: string;
        isOnDiet: boolean;
    };

    type FoodSection = {
        title: string;
        data: Food[];
    };
    

    async function fetchFoodRegister() {
        try {
            const data = await getAllFood();
    
            // Group data by date
            const groupedData = data.reduce((acc, food) => {
                if (acc[food.foodDate]) {
                    acc[food.foodDate].push(food);
                } else {
                    acc[food.foodDate] = [food];
                }
                return acc;
            }, {});
    
            // Transform grouped data for SectionList
            const transformedData = Object.entries(groupedData).map(([date, foods]) => ({
                title: date,
                data: foods
            }));
    
            setFoods(transformedData);
        } catch (err) {
            console.log(err);
        }
    }
    

    function handleStatistics(){
        navigation.navigate('statistics');
    }

    function handleDietRegister(){
        navigation.navigate('dietRegister');
    }

    function handleGoQuery(){
        navigation.navigate('query');
    }

    function getCurrentDate() {
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
        const year = date.getFullYear();
    
        return `${day}.${month}.${year}`;
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
                <DietPercentageCard background="green.light" onPress={handleStatistics}/>
                <Text mt={6} mb={3}>Refeições</Text>
                <Button title="+ Nova refeição" onPress={handleDietRegister}/>
                <SectionList
                    showsVerticalScrollIndicator={false}
                    sections={foods}
                    keyExtractor={(item: Food) => item.foodHour}
                    renderItem={({ item }: { item: Food }) => (
                        <FoodCard
                            onPress={handleGoQuery}
                            title={item.foodName}
                            hour={item.foodHour}
                            isHealthy={item.isOnDiet}
                        />
                    )}
                    renderSectionHeader={({section: {title}}) => (
                        <Heading fontSize="lg" mt={6}>
                            <Text>{title}</Text>
                        </Heading>
                    )}
                />

            </VStack>
        </SafeAreaView>
    );
}

