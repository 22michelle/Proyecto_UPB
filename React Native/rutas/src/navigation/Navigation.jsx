import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "../screen/DetailsScreen";
import HomeScreen from "../screen/HomeScreen";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
    }}
    
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} /> 
      
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
};