import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native'
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import { Directions } from 'react-native-gesture-handler';
import Animated, { BounceInRight, SlideInRight, SlideOutLeft } from 'react-native-reanimated';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING, BORDERRADIUS } from '../../theme/theme';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { onbordingsteps } from './data';


const Onboarding = ({ navigation }) => {

    const [screenIndex, setScreenIndex] = useState(0);

    const data = onbordingsteps[screenIndex];

    const onContinue = () => {
        const isLastScreen = screenIndex == onbordingsteps.length - 1;
        if (isLastScreen) {
            endOnboarding();
        } else {
            setScreenIndex(screenIndex + 1);
        }
    }

    const onBack = () => {
        const isFirstScreen = screenIndex == 0;
        if (isFirstScreen) {
            endOnboarding();
        } else {
            setScreenIndex(screenIndex - 1);
        }
    }

    const endOnboarding = () => {
        setScreenIndex(0);
        navigation.navigate('Getstarted');
    }


    const swipes = Gesture.Simultaneous(
        Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
        Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
    )


    return (
        <SafeAreaView style={styles.container}>

            <GestureDetector gesture={swipes}>
                <View
                    style={styles.containercontent}
                    key={screenIndex} //this is important for the renaimated to work
                >

                    <View style={styles.stepindicatorcontainer}>
                        {onbordingsteps.map((step, index) => (
                            <View key={index} style={[styles.stepindicator, { backgroundColor: index == screenIndex ? COLORS.primaryBlueHex : COLORS.primaryGreyHex }]} />
                        ))}
                    </View>

                    <Animated.View entering={BounceInRight} style={styles.icon}>
                        <Icon name={data.icon} size={300} color={COLORS.primaryBlueHex} />
                    </Animated.View>



                    <View style={styles.footer}>
                        <Animated.Text entering={SlideInRight} exiting={SlideOutLeft} style={styles.title}>{data.title}</Animated.Text>
                        <Animated.Text entering={SlideInRight.delay(150)} exiting={SlideOutLeft} style={styles.description}>{data.subtitle}</Animated.Text>

                        <View style={styles.buttonsrow}>
                            <Text onPress={endOnboarding} style={styles.buttontext} >Skip</Text>
                            <Pressable onPress={onContinue} style={styles.button}>
                                <Text style={styles.buttontext}>continue</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </GestureDetector>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: COLORS.primaryBlackHex,
    },
    containercontent: {
        padding: SPACING.space_20,
        flex: 1, //with this flex1 we are telling it to take all the full screen. if not it will just take only the amount of page space it needs.
        // try this by removeing the flex1 and give it a backgroud color of red. then you will understand what the flex1 does
    },
    icon: {
        alignSelf: 'center',
        margin: SPACING.space_20,
        marginTop: 'auto',
    },
    footer: {
        marginTop: 'auto',
    },
    title: {
        fontFamily: FONTFAMILY.poppins_extrabold,
        fontSize: FONTSIZE.size_30,
        color: COLORS.primaryWhiteHex,
        letterSpacing: 1.3,
        marginVertical: SPACING.space_10,
    },
    description: {
        color: COLORS.primaryLightGreyHex,
        fontSize: FONTSIZE.size_14,
        fontFamily: FONTFAMILY.poppins_regular,
        lineHeight: 20,
    },
    buttonsrow: {
        marginTop: SPACING.space_20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },

    button: {
        backgroundColor: 'transparent',
        borderColor: COLORS.primaryGreyHex,
        borderWidth: 1,
        borderRadius: BORDERRADIUS.radius_25,
        alignItems: 'center',
        flex: 1,
    },

    buttontext: {
        color: COLORS.primaryWhiteHex,
        textTransform: 'capitalize',
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_16,
        padding: SPACING.space_15,
        paddingHorizontal: SPACING.space_24,
    },
    stepindicatorcontainer: {
        flexDirection: 'row',
        gap: SPACING.space_4,
    },
    stepindicator: {
        flex: 1,
        height: 2,
        backgroundColor: COLORS.primaryGreyHex,
        borderRadius: BORDERRADIUS.radius_25,
    },
})

export default Onboarding

