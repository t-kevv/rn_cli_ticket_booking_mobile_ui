import React, { useEffect } from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { COLORS } from '../../theme/theme';


const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Onboarding');
        }, 5000);
    }, [])

    const logo = require('../../assets/logo.png');

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.primaryBlackHex} style='light' />
            <Animatable.Image
                source={logo}
                style={styles.logo}
                resizeMode="contain"
                animation="rubberBand"
                iterationCount={10}
                direction="alternate"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primaryBlackHex,
    },
    logo: {
        width: 80,
        height: 80,
    },
})

export default Splash

