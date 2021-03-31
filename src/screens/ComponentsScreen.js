import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Jackson';

    return (
        <View>
            <Text style={styles.textStyle}>This is the components screen. </Text> 
            <Text style={styles.subHeaderStyle}>My name is {name} </Text> 
        </View>
    );
};
// use babeljs.io to interpret the above JSX to Javascript

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;