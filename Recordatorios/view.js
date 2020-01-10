import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Button, Header, Overlay, Text, Input } from 'react-native-elements'
import { styles } from './styles';
import Item from './components/item';


export default ({ handlePress, data, isVisible, inputRecordatorio,handleGuardar }) => {

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
                <View>
                    <Text h4>Ingrese Recordatorio</Text>
                    <Input
                        placeholder='Recordatorio'
                        ref={inputRecordatorio}
                        value={inputRecordatorio.current}
                        onChangeText={(text) => { inputRecordatorio.current = text }}
                    />
                    <Button title='Guardar' onPress={handleGuardar} style={styles.button} />
                </View>
            </Overlay>

        </View>
    );
}

