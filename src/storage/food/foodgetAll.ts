import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOOD_COLLECTION } from "../storageConfig";

export async function getAllFood() {
    try {
        const storage = await AsyncStorage.getItem(FOOD_COLLECTION)

        const foods: string[] = storage ? JSON.parse(storage) : []
    
        return foods
    }catch(err){
        throw err
    }
    
}
 