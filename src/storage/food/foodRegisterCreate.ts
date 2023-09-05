import AsyncStorage from '@react-native-async-storage/async-storage'
import { FOOD_COLLECTION } from '../storageConfig'
import { getAllFood } from './foodgetAll';

export async function FoodRegisterCreate(foodName: string, foodDescription: string, foodDate: string, foodHour: string, isOnDiet: boolean) {
    try {

        const storedFood = await getAllFood()

        const foodData = {
            foodName,
            foodDescription,
            foodDate,
            foodHour,
            isOnDiet
        };

        const storage = JSON.stringify([...storedFood, foodData])

        await AsyncStorage.setItem(FOOD_COLLECTION, storage);
    } catch (error) {
        throw error;
    }
}