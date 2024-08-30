import React, { useState } from 'react';
import { SafeAreaView, StatusBar, Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { COLORS, FONTFAMILY, FONTSIZE, SPACING, BORDERRADIUS } from '../../theme/theme';
import { KeyboardAvoiding, Authbutton, Msgmodal } from '../../components';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Emialverification = ({ navigation }) => {
    const [code, setCode] = useState('');

    const handleChangeText = (text) => {
        setCode(text);
    };

    const [modalVisible, setModalVisible] = useState(false)

    const buttonHandler = () => {
        navigation.navigate('Signin')
        setModalVisible(false)
    }

    const showModal = () => {
        setModalVisible(true)
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
                    <Icon name={'lock-open'} size={100} color={COLORS.primaryBlueHex} style={styles.icon} />
                </Animatable.View>

                <Text style={styles.text}>Enter the 4-digit code sent to your email to verify your account</Text>

                <View style={styles.codeInputContainer}>
                    <TextInput
                        style={styles.codeInput}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={handleChangeText}
                        value={code}
                    />
                    <TextInput
                        style={styles.codeInput}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={handleChangeText}
                        value={code}
                    />
                    <TextInput
                        style={styles.codeInput}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={handleChangeText}
                        value={code}
                    />
                    <TextInput
                        style={styles.codeInput}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={handleChangeText}
                        value={code}
                    />
                </View>

                <View style={{ marginTop: SPACING.space_24 }}>
                    <Authbutton onPress={showModal} text={'Verify'} />
                </View>

                <View>
                    <Text style={styles.verifytext}>Didn't receive the email ? Resend </Text>
                    <TouchableOpacity>
                        <Text
                            style={{
                                color: COLORS.primaryBlueHex,
                                fontFamily: FONTFAMILY.poppins_extralight,
                                alignSelf: 'center',
                                fontSize: FONTSIZE.size_12,
                            }}>
                            in 30 second(s)
                        </Text>
                    </TouchableOpacity>
                </View>

                <Msgmodal
                    headertext={'Successfull'}
                    messagetext={'Lorem ipsum dolor sit amet consectetur.'}
                    modalVisible={modalVisible}
                    buttonHandler={buttonHandler}
                />


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
    codeInputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: SPACING.space_24,
    },
    codeInput: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: COLORS.primaryLightGreyHex,
        borderRadius: BORDERRADIUS.radius_10 + 1,
        marginHorizontal: SPACING.space_4,
        textAlign: 'center',
        fontSize: FONTSIZE.size_24,
        color: COLORS.primaryWhiteHex,
    },
    verifytext: {
        fontSize: FONTSIZE.size_12,
        color: COLORS.primaryWhiteHex,
        textAlign: 'center',
        marginTop: SPACING.space_20,
        fontFamily: FONTFAMILY.poppins_extralight,
        letterSpacing: 0.4,
    }
});

export default Emialverification;
