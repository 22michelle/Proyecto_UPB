import { NavigationContainer } from "@react-navigation/native";
import axios from "axios";
import { Navigation } from "./src/navigation/Navigation";

axios.defaults.baseURL = "https://api.themoviedb.org/3/movie";
axios.defaults.params = {
  api_key: "a4a4715ac82053daa9002378627504a7",
  lenguage: "es-ES",
};


export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}