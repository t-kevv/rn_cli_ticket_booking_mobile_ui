import React from 'react';
import { SafeAreaView, StatusBar, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { COLORS, FONTFAMILY, FONTSIZE, SPACING, BORDERRADIUS } from '../../theme/theme';
import { KeyboardAvoiding, CustomInput, Authbutton, } from '../../components';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Resetpassword = ({ navigation }) => {


    const handlereset = () => {
        navigation.navigate('Signin')
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
                    <Icon name={'shield-lock-open'} size={100} color={COLORS.primaryBlueHex} style={styles.icon} />
                </Animatable.View>

                <Text style={styles.text}>Type and confirm you new password</Text>

                <CustomInput
                    label="New Password"
                    placeholder="* * * * * * * *"
                    iconName="lock-open-variant-outline"
                    isPassword={true}
                />

                <CustomInput
                    label="Confirm New Password"
                    placeholder="* * * * * * * *"
                    iconName="lock-open-variant-outline"
                    isPassword={true}
                />

                <Text></Text>

                <Authbutton onPress={handlereset} text={'Reset'} />

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

export default Resetpassword