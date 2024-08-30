import React, { useState } from 'react';
import { SafeAreaView, StatusBar, Text, StyleSheet, View, ActivityIndicator, Pressable, } from 'react-native';
import { Formik } from 'formik';

import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../theme/theme';
import { KeyboardAvoiding, CustomInput, Msgbox, Authbutton } from '../../components';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Signup = ({ navigation }) => {
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleregister = async (credentials, setSubmitting) => {
        try {
            setMessage(null);

            navigation.navigate('Emailverication')
            // call to backend

            //  if login succesfull move to nextpage

            setSubmitting(false);
        } catch (error) {
            setMessage('signup failed: ' + error.message);
            setSubmitting(false);
        }
    }
    return (
        <>
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor={COLORS.primaryBlackHex} style='light' />

                <KeyboardAvoiding>
                    {/* <Text style={styles.regularText}>Welcome to Starfans</Text> */}
                    <Formik
                        initialValues={{ fullname: '', email: '', password: '', password2: '' }}
                        onSubmit={(values, { setSubmitting }) => {
                            if (values.email == "" || values.password == "" || values.fullname == "" || values.password2 == "") {
                                setMessage('All fields are required');
                                setSubmitting(false);
                            } else if (values.password !== values.password2) {
                                setMessage('Passwords do not match');
                                setSubmitting(false);
                            } else {
                                handleregister(values, setSubmitting);
                            }
                        }}
                    >
                        {({ handleChange, handleSubmit, values, isSubmitting }) => (
                            <>
                                <CustomInput
                                    label="Full Name"
                                    placeholder="Full Name"
                                    iconName="account"
                                    onChangeText={handleChange('fullname')}
                                    value={values.fullname}
                                />

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

                                <CustomInput
                                    label="Confirm Password"
                                    placeholder="* * * * * * * *"
                                    iconName="lock-open"
                                    onChangeText={handleChange('password2')}
                                    value={values.password2}
                                    isPassword={true}
                                />

                                <View style={{ marginTop: 10, flex: 1, marginBottom: 15, alignItems: 'center' }}>
                                    <Msgbox message={message || ' '} success={isSuccess} />
                                </View>


                                <View style={{ marginBottom: 10, }}>
                                    {!isSubmitting && <Authbutton onPress={handleSubmit} text={'Register'} />}
                                    {isSubmitting && (
                                        <Authbutton disabled={true} text={<ActivityIndicator size={'small'} color={COLORS.primaryOrangeHex} />} />
                                    )}
                                </View>

                                <View>
                                    <Pressable onPress={() => navigation.navigate('Signin')} style={styles.textcon}>
                                        <Text style={styles.text} >Have an account ? <Text style={{ color: COLORS.primaryBlueHex }}> Signin </Text></Text>
                                    </Pressable>
                                </View>

                            </>
                        )}


                    </Formik>
                </KeyboardAvoiding>
            </SafeAreaView>
        </>
    )
}


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
});

export default Signup