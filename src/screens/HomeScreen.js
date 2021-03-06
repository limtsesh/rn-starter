import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  //console.log(props.navigation);

  return (
        <View>
            <Text style={styles.text}>HomeScreen 1</Text>
        
            <Button 
                //onPress={ () => console.log ('Component Button pressed')}
                onPress={ () => navigation.navigate('Components')}
                title="Go to Components Demo"
              />

            <Button
              title="Go to List Demo"
              onPress={() => navigation.navigate('List')}
            />

            <Button
              title="Go to Image Demo"
              onPress={() => navigation.navigate('Image')}
            />


        </View>
      );
};



const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;


