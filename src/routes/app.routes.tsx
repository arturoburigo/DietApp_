import {
    createNativeStackNavigator,
    NativeStackNavigationProp,
  } from "@react-navigation/native-stack";
  import { Home } from "../screens/Home";
  import { Statistics } from "../screens/Statistics";
import { DietRegister } from "../screens/DietRegister";
import { Feedback } from "../screens/Feedback";
import { Query } from "../screens/Query";

  
  type AppRoutes = {
    home: undefined;
    statistics: undefined;
    dietRegister: undefined;
    feedback: undefined;
    query: undefined;
  };
  
  export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;
  
  const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();
  
  export function AppRoutes() {
    return (
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="home" component={Home} />
        <Screen name="statistics" component={Statistics} />
        <Screen name="dietRegister" component={DietRegister} />
        <Screen name="feedback" component={Feedback} />
        <Screen name="query" component={Query} />
      </Navigator>
    );
  }
  