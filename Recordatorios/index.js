import React, { useState, useRef } from 'react';

import ComponetView from './view';



export default () => {
    const [data, setData] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const inputRecordatorio = useRef();
    const handlePress = () => setIsVisible(!isVisible);
    const handleGuardar = () => {
        let datoNuevo = [{ key: (data.length + 1), title: inputRecordatorio.current }].concat(data);
        setData(datoNuevo);
        handlePress();
    }


    return (
        <ComponetView
            handlePress={handlePress}
            data={data}
            isVisible={isVisible}
            inputRecordatorio={inputRecordatorio}
            handleGuardar={handleGuardar} />
    );
}
