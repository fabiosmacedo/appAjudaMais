import React, {useState, useEffect} from 'react';

import { View, Text } from 'react-native';


export default function()
{
    const [prod, setProd]=useState("produto 01")

    return(
        <View>
            <Text>{prod}</Text>
        </View>
    )
}