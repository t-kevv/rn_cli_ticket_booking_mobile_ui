import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, Pressable } from 'react-native'
import * as Animatable from 'react-native-animatable';


import { COLORS, FONTFAMILY, FONTSIZE, SPACING, BORDERRADIUS } from '../../theme/theme';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Getstarted = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLORS.primaryBlackHex} style='light' />

            <View style={styles.containercontent} >
                <View>
                    <Icon name='emoticon-tongue' size={80} color={COLORS.primaryBlueHex} style={styles.icon1} />
                    <Icon name='vector-combine' size={80} color={COLORS.primaryBlueHex} style={styles.icon2} />
                    <Icon name='toy-brick-search-outline' size={80} color={COLORS.primaryBlueHex} style={styles.icon3} />
                    <Icon name='ticket-percent' size={100} color={COLORS.primaryBlueHex} style={styles.icon4} />
                </View>

                <View style={styles.content}>
                    <Text style={styles.title}>let's get</Text>
                    <Text style={styles.subtitle}>started</Text>
                    <View style={styles.descripcon}>
                        <Animatable.Text
                            style={styles.fans}
                            animation="shake"
                            iterationCount="infinite"
                            direction="alternate"
                        >STARFANS !</Animatable.Text>
                        <Text style={styles.description}>Simplified Booking and Ticketing</Text>
                    </View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Signup')}
                    >
                        <Text style={styles.buttontext}> join now !</Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', marginTop: SPACING.space_12, justifyContent: 'center' }}>
                        <Text style={styles.text}>Already have an account ? </Text>
                        <Pressable onPress={() => navigation.navigate('Signin')}>
                            <Text style={styles.textt}> login</Text>
                        </Pressable>
                    </View>

                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primaryBlackHex,
    },
    containercontent: {
        padding: SPACING.space_20,
        flex: 1,
    },
    icon1: {
        position: 'absolute',
        top: 10,
        transform: [
            { translateX: 20 },
            { translateY: 50 },
            { rotate: "-15deg" }
        ],
    },
    icon2: {
        position: 'absolute',
        top: -30,
        left: 100,
        transform: [
            { translateX: 50 },
            { translateY: 50 },
            { rotate: "-5deg" }
        ],
    },
    icon3: {
        position: 'absolute',
        top: 130,
        left: -50,
        transform: [
            { translateX: 50 },
            { translateY: 50 },
            { rotate: "15deg" }
        ],
    },
    icon4: {
        position: 'absolute',
        top: 110,
        left: 170,
        transform: [
            { translateX: 50 },
            { translateY: 50 },
            { rotate: "-15deg" }
        ],
    },
    content: {
        paddingHorizontal: SPACING.space_20,
        position: 'absolute',
        top: 330,
        width: '100%',
    },
    title: {
        color: COLORS.primaryWhiteHex,
        fontSize: FONTSIZE.size_30 + 10,
        textTransform: 'capitalize',
        fontFamily: FONTFAMILY.poppins_bold,
    },
    subtitle: {
        color: COLORS.primaryWhiteHex,
        fontSize: FONTSIZE.size_30 + 5,
        textTransform: 'capitalize',
        fontFamily: FONTFAMILY.poppins_bold,
    },
    descripcon: {
        marginVertical: SPACING.space_20,
    },
    description: {
        color: COLORS.primaryWhiteHex,
        fontSize: FONTSIZE.size_12,
        marginVertical: 4,
        fontFamily: FONTFAMILY.poppins_light,
        letterSpacing: 1.3,
    },
    fans: {
        color: COLORS.primaryBlueHex,
        fontSize: FONTSIZE.size_14,
        marginVertical: 4,
        fontFamily: FONTFAMILY.poppins_extrabold,
        letterSpacing: 1.6,
    },
    button: {
        backgroundColor: 'transparent',
        borderColor: COLORS.primaryGreyHex,
        borderWidth: 1,
        borderRadius: BORDERRADIUS.radius_25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: SPACING.space_20,
        padding: SPACING.space_15,
    },
    buttontext: {
        color: COLORS.primaryWhiteHex,
        textTransform: 'capitalize',
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_16,
        paddingHorizontal: SPACING.space_24,
    },
    text: {
        color: COLORS.primaryWhiteHex,
        fontFamily: FONTFAMILY.poppins_thin,
        fontSize: FONTSIZE.size_12,
        letterSpacing: 1,
    },
    textt: {
        color: COLORS.primaryBlueHex,
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_12,
        letterSpacing: 1,
        textTransform: 'capitalize',
    },
})

export default Getstarted


