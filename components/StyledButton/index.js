import React from "react";
import{ View,Text,Pressable } from 'react-native';
import styles from "./styles";




const StyledButton =(props) =>{
    

    const { type, content, onPress } = props;

const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
const textColor = type === 'primary' ? '#FFFFFF' : '#171A20k';

    return(
        <View style={styles.container}>
            <Pressable
            style={[styles.button, {backgroundColor: backgroundColor}]}
            onPress={()=> onPress()}
            >
                <Text style={[styles.Text, {color:textColor}]}>{content}</Text>
                

            </Pressable>

        </View>
    );
};


export default StyledButton;