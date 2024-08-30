import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../theme/theme';
import { BGicon, Profilepic } from '../index'


const Headerbar = ({ title }) => {
    return (
        <View style={styles.headercontainer}>
            <BGicon name='star' color={COLORS.primaryOrangeHex} size={FONTSIZE.size_20} />
            <Text style={styles.headertext}>{title}</Text>
            <Profilepic />
        </View>
    )
}

const styles = StyleSheet.create({
    headercontainer: {
        padding: SPACING.space_24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headertext: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryWhiteHex,
    },
})

export default Headerbar

