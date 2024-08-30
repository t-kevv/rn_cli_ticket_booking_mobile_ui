import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING, BORDERRADIUS } from '../../theme/theme'


const Profile = () => {
    const tabBarHeight = useBottomTabBarHeight();

    return (
        <View style={styles.container}>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primaryBlackHex,
    },
});

export default Profile

