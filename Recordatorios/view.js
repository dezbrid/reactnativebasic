import React from 'react';
import { StyleSheet, View, FlatList} from 'react-native';
import { Button, Header, Overlay ,Text} from 'react-native-elements'
import { styles } from './styles';
import Item from './components/item';


export default ({ handlePress, data, isVisible }) => {

    return (
        <View style={styles.container} >
            <Header
                centerComponent={{ text: 'Recordatorios', }}
            />
            <View style={styles.containerButton}>
                <Button title='Agregar' onPress={handlePress} style={styles.button} />
            </View>
            <FlatList data={data} renderItem={Item} />
            <Overlay
                isVisible={isVisible}
                onBackdropPress={handlePress}
            >
                <Text h4>Ingrese Recordatorio</Text>
            </Overlay>

        </View>
    );
}

