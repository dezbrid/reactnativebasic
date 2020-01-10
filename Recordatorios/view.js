import React  from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default () => {
    return (
        <View style= {styles.container} >
             <Text>hola2</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cyan: {
        backgroundColor: 'cyan',
      },

});