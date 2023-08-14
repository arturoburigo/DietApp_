import React, { useState } from "react";
import { VStack, Text, SectionList, Heading } from "native-base";
import { Header } from "../Components/Header";
import { DietPercentageCard } from "../Components/DietPercentageCard";
import { Button } from "../Components/Button";
import { FoodCard } from "../Components/FoodCard";

export function Home() {
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

    // Transform foods into sections
    const sections = foods.map(({ data, meals }) => ({
        title: data,
        data: meals
    }));

    return (
        <VStack flex={1} bg="white" px={8}>
            <Header />
            <DietPercentageCard background="green.light" />
            <Text mt={6} mb={3}>Refeições</Text>
            <Button title="+ Nova refeição" />
            <SectionList
                showsVerticalScrollIndicator={false}
                sections={sections}
                keyExtractor={(item) => item.hour}
                renderItem={({ item }) => (
                    <FoodCard
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
    );
}
