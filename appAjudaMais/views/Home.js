import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native";

export default function Home({navigation}){
    return(
        <View>
            <Text>Home</Text>
            <Button 
                title='Tela de Login' 
                onPress={() => navigation.navigate(
                    'Login', 
                    {id: 30} 
                )} 
            />
        </View>
    )
}