import React, { useState } from 'react'
import { StyleSheet, View, ScrollView, StatusBar, Text } from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING, BORDERRADIUS } from '../../theme/theme'


const Account = () => {
    const tabBarHeight = useBottomTabBarHeight();

    return (
        <View style={[styles.container,
        { backgroundColor: COLORS.primaryLightHex, }
        ]}>
            {/* <StatusBar backgroundColor={COLORS.primaryLightGreyHex} barStyle="dark-content" /> */}
            <StatusBar backgroundColor={COLORS.primaryBlueHex} />
            <ScrollView
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollviewflex}
            >

                <View style={[styles.HeaderContainer]}>
                    <Text>sup</Text>
                </View>



            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollviewflex: {
        flexGrow: 1,
    },
    HeaderContainer: {
        backgroundColor: COLORS.primaryBlueHex,
        paddingVertical: SPACING.space_36,
        // paddingTop: Spacing.space_28,
        // paddingBottom: Spacing.space_28,
    },
});

export default Account
