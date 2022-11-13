import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { colors } from "../config/colors";
import { SPACING } from "../config/spacing";
import DetailsScreen from "../screen/DetailsScreen";
import PostActionScreen from "../screen/PostActionScreen";
import PostScreen from "../screen/PostScreen";

const Stack = createNativeStackNavigator();

export const Navigation = () => {

    return(
        <Stack.Navigator
        screenOptions={{
            headerShown:false,
            contentStyle:{
                paddingHorizontal:SPACING * 20,
                flex: 1,
                backgroundColor: colors.black,
            }
        }}
        >
            <Stack.Screen name="HomeScreen" component={PostScreen}/>
            <Stack.Screen name="DetailsScreen" component={DetailsScreen}/>
            <Stack.Screen name="PostScreen" component={PostActionScreen}/>
        </Stack.Navigator>
    )
}