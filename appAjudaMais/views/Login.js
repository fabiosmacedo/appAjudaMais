import React from "react";
import { View, Text } from "react-native";

export default function Login({route}){
    return(
        <View>
            <Text>Componente de Login</Text>
            <Text>{route.params.id}</Text>
        </View>
    )
}