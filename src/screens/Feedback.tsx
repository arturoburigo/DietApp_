    import { Heading, Image, Text, VStack } from "native-base";
    import onDiet from '../assets/onDiet.png'
    import notOnDiet from '../assets/notOnDiet.png'
    import { Button } from "../Components/Button";
    import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
    import { AppNavigatorRoutesProps } from "../routes/app.routes";


    type FeedbackScreenRouteParams = {
        Feedback: {
            activeButton: 'Sim' | 'Nao';
        }
    };
    
    
    export function Feedback() {
        const navigation = useNavigation<AppNavigatorRoutesProps>();
        const route = useRoute<RouteProp<FeedbackScreenRouteParams, 'Feedback'>>();
        const { activeButton } = route.params;
    

        function handleGoHome(){
            navigation.navigate('home')
        }

        return (
            <VStack flex={1} justifyContent={"center"} alignItems={"center"} px={8} >
                <Heading fontWeight={"semibold"} color={activeButton == 'Sim' ? 'green.600' : 'red.600'}>{activeButton== 'Sim' ? 'Continue assim!' : 'Que pena!'}</Heading>
                <Text mt={4} mb={4} textAlign={"center"}>
                    {activeButton == 'Sim' ? (
                        <>Você continua <Text fontWeight="bold">dentro da dieta</Text>. Muito bem!</>
                    ) : (
                        <>Você <Text fontWeight="bold">saiu da dieta</Text>. dessa vez, mas continue se esforçando e não desista!</>
                    )}
                </Text>
                <Image source={activeButton == 'Sim' ? onDiet : notOnDiet} mb={10} alt="Ondiet or not image"/>
                <Button title="Ir para a pagina inicial" onPress={handleGoHome}/>
            </VStack>
        )
    }
