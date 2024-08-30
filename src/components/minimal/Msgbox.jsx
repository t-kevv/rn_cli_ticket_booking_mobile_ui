import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS, FONTFAMILY, FONTSIZE } from '../../theme/theme';


const Msgbox = ({ message, success }) => {
    return (

        <Text style={[styles.text, { color: success ? COLORS.primaryBlueHex : COLORS.primaryOrangeHex }]}>{message}</Text>

    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: FONTSIZE.size_12,
        fontFamily: FONTFAMILY.poppins_extralight,
    }
})

export default Msgbox

