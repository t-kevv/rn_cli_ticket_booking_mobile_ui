import React from 'react';
import { SafeAreaView, StatusBar, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { COLORS, FONTFAMILY, FONTSIZE, SPACING, BORDERRADIUS } from '../../theme/theme';
import { KeyboardAvoiding, CustomInput, Authbutton, } from '../../components';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Forgotpassword = ({ navigation }) => {

    const handlereset = () => {
        navigation.navigate('Resetpassword')
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLORS.primaryBlackHex} style='light' />

            <KeyboardAvoiding>

                <Animatable.View
                    animation="pulse"
                    iterationCount="infinite"
                    direction="alternate"
                >
                    <Icon name={'key'} size={100} color={COLORS.primaryBlueHex} style={styles.icon} />
                </Animatable.View>

                <Text style={styles.text}>Provide the information below to begin the process of resetting your password</Text>

                <CustomInput
                    label="Email Address"
                    placeholder="Email Address"
                    iconName="email-plus"
                />

                <Text></Text>

                <Authbutton onPress={handlereset} text={'Request'} />

            </KeyboardAvoiding>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SPACING.space_24,
        backgroundColor: COLORS.primaryBlackHex,
    },
    text: {
        fontSize: FONTSIZE.size_12,
        color: COLORS.primaryWhiteHex,
        textAlign: 'center',
        marginTop: SPACING.space_24,
        marginBottom: SPACING.space_10 - 5,
        fontFamily: FONTFAMILY.poppins_extralight,
    },
    icon: {
        alignSelf: 'center',
        padding: SPACING.space_12,
        backgroundColor: COLORS.primaryDarkGreyHex,
        borderRadius: BORDERRADIUS.radius_25 + 125,
    },

});

export default Forgotpassword

