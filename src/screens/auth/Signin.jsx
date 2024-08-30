import React, { useState } from 'react';
import { SafeAreaView, StatusBar, Text, StyleSheet, View, ActivityIndicator, Pressable, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';

import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../theme/theme';
import { KeyboardAvoiding, CustomInput, Msgbox, Authbutton } from '../../components';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Signin = ({ navigation }) => {
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handlelogin = async (credentials, setSubmitting) => {
        try {
            setMessage(null);
            navigation.navigate('Tab')
            // call to backend

            //  if login succesfull move to nextpage

            setSubmitting(false);
        } catch (error) {
            setMessage('login failed: ' + error.message);
            setSubmitting(false);
        }
    }


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLORS.primaryBlackHex} style='light' />

            <KeyboardAvoiding>
                <Text style={styles.regularText}>Login to Starfans</Text>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values, { setSubmitting }) => {
                        if (values.email == "" || values.password == "") {
                            setMessage('All fields are required');
                            setSubmitting(false);
                        } else {
                            handlelogin(values, setSubmitting);
                        }
                    }}
                >
                    {({ handleChange, handleSubmit, values, isSubmitting }) => (
                        <>
                            <CustomInput
                                label="Email Address"
                                placeholder="Email Address"
                                iconName="email-plus"
                                onChangeText={handleChange('email')}
                                value={values.email}
                            />

                            <CustomInput
                                label="Password"
                                placeholder="* * * * * * * *"
                                iconName="lock-open"
                                onChangeText={handleChange('password')}
                                value={values.password}
                                isPassword={true}
                            />

                            <View style={{ marginTop: 10, flex: 1, marginBottom: 15, alignItems: 'center' }}>
                                <Msgbox message={message || ' '} success={isSuccess} />
                            </View>


                            <View style={{ marginBottom: 10, }}>
                                {!isSubmitting && <Authbutton onPress={handleSubmit} text={'login'} />}
                                {isSubmitting && (
                                    <Authbutton disabled={true} text={<ActivityIndicator size={'small'} color={COLORS.primaryOrangeHex} />} />
                                )}
                            </View>

                            <View>
                                <Pressable onPress={() => navigation.navigate('Forgotpassword')} style={styles.textcon}>
                                    <Text style={[styles.text, { color: COLORS.primaryBlueHex }]} >Forgot password?</Text>
                                </Pressable>
                                <Pressable onPress={() => navigation.navigate('Signup')} style={styles.textcon}>
                                    <Text style={styles.text} >Don't have an account ? <Text style={{ color: COLORS.primaryBlueHex }}> Create one</Text></Text>
                                </Pressable>
                            </View>

                            <Text
                                style={{
                                    alignSelf: 'center', marginTop: 4, color: COLORS.primaryLightGreyHex,
                                    fontFamily: FONTFAMILY.poppins_bold
                                }}> Or
                            </Text>

                            <View style={styles.otherlogins}>
                                <TouchableOpacity style={styles.googlelogin}>
                                    <Icon name="google" size={20} color="white" />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.facebooklogin}>
                                    <Icon name="facebook" size={20} color="white" />
                                </TouchableOpacity>
                            </View>
                        </>
                    )}

                </Formik>
            </KeyboardAvoiding>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SPACING.space_24,
        backgroundColor: COLORS.primaryBlackHex,
    },
    regularText: {
        fontSize: 16,
        color: COLORS.primaryWhiteHex,
        textAlign: 'left',
        marginBottom: SPACING.space_24,
        textTransform: 'capitalize',
        fontFamily: 'Poppins-SemiBold',
    },
    textcon: {
        alignItems: 'center',
        marginTop: 4,
    },
    text: {
        flex: 1,
        color: COLORS.primaryLightHex,
        fontSize: FONTSIZE.size_12,
        fontFamily: FONTFAMILY.poppins_extralight,

    },
    otherlogins: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    googlelogin: {
        padding: 18,
        backgroundColor: '#DB4437',
        borderRadius: 100,
        marginHorizontal: 5,
    },
    facebooklogin: {
        padding: 18,
        backgroundColor: '#1877F2',
        borderRadius: 100,
        marginHorizontal: 5,
    },
});

export default Signin;
