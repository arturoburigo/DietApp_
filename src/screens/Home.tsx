import React, { useState } from "react";
import { VStack, Text, SectionList, Heading } from "native-base";
import { Header } from "../Components/Header";
import { DietPercentageCard } from "../Components/DietPercentageCard";
import { Button } from "../Components/Button";
import { FoodCard } from "../Components/FoodCard";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../routes/app.routes";
import { getAllFood } from "../storage/food/foodgetAll";

export function Home() {
    const navigation = useNavigation<AppNavigatorRoutesProps>()
    const [foods, setFoods] = useState([
        {
            data: "09.10.2023",
            meals: [
                {
                    hour: "20:00",
                    title: "X-Tudo",
                    isHealthy: false
                },
                {
                    hour: "10:00",
                    title: "Whey Protein com leite",
                    isHealthy: true
                }
            ],

        },
        {
            data: "09.10.2023",
            meals: [
                {
                    hour: "20:00",
                    title: "X-Tudo",
                    isHealthy: false
                },
                {
                    hour: "10:00",
                    title: "Whey Protein com leite",
                    isHealthy: true
                }
            ],
        },
        {
            data: "09.10.2023",
            meals: [
                {
                    hour: "20:00",
                    title: "X-Tudo",
                    isHealthy: false
                },
                {
                    hour: "10:00",
                    title: "Whey Protein com leite",
                    isHealthy: true
                }
            ],
        }
    ]);

    async function fetchFoodRegister() {
        
    }

    // Transform foods into sections
    const sections = foods.map(({ data, meals }) => ({
        title: data,
        data: meals
    }));

    function handleStatistics(){
        navigation.navigate('statistics')
    }

    function handleDietRegister(){
        navigation.navigate('dietRegister')
    }

    function handleGoQuery(){
        navigation.navigate('query')
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <VStack flex={1} bg="white" px={8}>
                        <Header />
                        <DietPercentageCard background="green.light"  onPress={handleStatistics}/>
                        <Text mt={6} mb={3}>Refeições</Text>
                        <Button title="+ Nova refeição" onPress={handleDietRegister}/>
                        <SectionList
                            showsVerticalScrollIndicator={false}
                            sections={sections}
                            keyExtractor={(item) => item.hour}
                            renderItem={({ item }) => (
                                <FoodCard
                                    onPress={handleGoQuery}
                                    title={item.title}
                                    hour={item.hour}
                                    isHealthy={item.isHealthy}
                                />
                            )}
                            renderSectionHeader={({ section }) => (
                                <Heading fontSize="lg" mt={6} >
                                    <Text>{section.title}</Text>
                                </Heading>
                            )
                            }
                        />
                    </VStack >
        </SafeAreaView>
     
    );
}
