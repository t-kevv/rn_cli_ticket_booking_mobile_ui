import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { COLORS, SPACING, BORDERRADIUS } from '../../theme/theme';


const Profilepic = () => {
    return (
        <View style={styles.imagecontainer}>
            <Image source={require('../../assets/users/user1.png')} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    imagecontainer: {
        height: SPACING.space_30,
        width: SPACING.space_30,
        borderRadius: BORDERRADIUS.radius_10 + 2,
        borderWidth: 2,
        borderColor: COLORS.secondaryDarkGreyHex,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    image: {
        height: SPACING.space_30,
        width: SPACING.space_30,
    },
})

export default Profilepic

