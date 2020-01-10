import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import ComponetView from './view';
import datos from './datos';


export default () => {
    const [data, setData] = useState(datos);
    const [isVisible,setIsVisible]=useState(false)
    const handlePress = () => setIsVisible(!isVisible)
    return (
        <ComponetView 
        handlePress={handlePress} 
        data={data} 
        isVisible={isVisible}/>
    );
}
