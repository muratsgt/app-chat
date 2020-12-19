import React from 'react';
import {View, Text, Image} from 'react-native';

const Splash = (props) => {

    setTimeout(function(){ props.navigation.navigate("AppRoute") }, 1000);

    return(
        <View style={{flex: 1, justifyContent:"center", alignItems:"center"}}>
            <Image 
            source={require('../assets/logo.png')} 
            style={{width: 200}}
            resizeMode="contain"
            />
        </View>
    )
}

export {Splash};