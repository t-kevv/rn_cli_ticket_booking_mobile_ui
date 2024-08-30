import React from 'react'
import { StyleSheet, View } from 'react-native'
import { COLORS, BORDERRADIUS, SPACING } from '../../theme/theme';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BGicon = ({ name, color, size }) => {
    return (
        <View style={styles.container}>
            <View style={styles.bg}>
                <Icon name={name} color={color} size={size} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: COLORS.secondaryDarkGreyHex,
        borderRadius: BORDERRADIUS.radius_10 + 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.secondaryDarkGreyHex,
        overflow: 'hidden',
    },
    bg: {
        height: SPACING.space_30,
        width: SPACING.space_30,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default BGicon

