import React from 'react'
import { StyleSheet, Text, View, Modal, Pressable, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable';

import { COLORS, FONTFAMILY, FONTSIZE, SPACING, BORDERRADIUS } from '../../theme/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Msgmodal = ({ buttonHandler, headertext, messagetext, modalVisible }) => {
    return (

        <Modal animationType='slide' visible={modalVisible} transparent={true}>
            <Pressable style={styles.pressablecon}>
                <View style={styles.content}>
                    <Animatable.View
                        animation="pulse"
                        iterationCount="infinite"
                        direction="alternate"
                    >
                        <Icon name={'check-circle'} size={70} color={COLORS.primaryBlueHex} style={styles.icon} />
                    </Animatable.View>
                    <Text style={styles.heading}>{headertext}</Text>
                    <Text style={styles.message}>{messagetext}</Text>
                    <TouchableOpacity onPress={buttonHandler}>
                        <Icon name={'arrow-right'} size={30} color={COLORS.primaryBlueHex} style={{
                            padding: SPACING.space_12,
                            backgroundColor: COLORS.primaryDarkGreyHex,
                            borderRadius: BORDERRADIUS.radius_25 + 125,
                            marginTop: 10,
                        }} />
                    </TouchableOpacity>

                </View>
            </Pressable>
        </Modal>

    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: FONTSIZE.size_12,
        fontFamily: FONTFAMILY.poppins_extralight,
    },
    pressablecon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: SPACING.space_24,
        backgroundColor: COLORS.primaryBlackRGBA,
    },
    content: {
        width: '100%',
        padding: SPACING.space_30 + 5,
        backgroundColor: COLORS.secondaryDarkGreyHex,
        borderRadius: BORDERRADIUS.radius_20,
        alignItems: 'center',
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: '0px 2px',
        shadowOpacity: 0.25,
        shadowRadius: BORDERRADIUS.radius_4,
    },
    icon: {
        padding: SPACING.space_12,
        backgroundColor: COLORS.primaryBlackHex,
        borderRadius: BORDERRADIUS.radius_25 + 125,
    },
    heading: {
        fontSize: FONTSIZE.size_24,
        color: COLORS.primaryWhiteHex,
        fontFamily: FONTFAMILY.poppins_bold,
        marginVertical: SPACING.space_2,
    },
    message: {
        fontSize: FONTSIZE.size_12 + 1,
        color: COLORS.primaryWhiteHex,
        fontFamily: FONTFAMILY.poppins_extralight,
    },
})


export default Msgmodal

