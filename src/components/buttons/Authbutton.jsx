import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { COLORS, FONTFAMILY, FONTSIZE, BORDERRADIUS, SPACING } from '../../theme/theme';


const Authbutton = ({ text, onPress, disabled }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttontext}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: 'center',
        padding: SPACING.space_12 + 2,
        borderRadius: BORDERRADIUS.radius_10,
        backgroundColor: COLORS.primaryBlueHex,
    },

    buttontext: {
        color: COLORS.primaryWhiteHex,
        textTransform: 'capitalize',
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_14,
    },
})

export default Authbutton

