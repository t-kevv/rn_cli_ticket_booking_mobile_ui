import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING, BORDERRADIUS } from '../../theme/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Eventcard = ({ eventname, eventimage, eventdate, numberofpeoplegoing, eventlocation, eventime, cardfuntion, }) => {
    return (
        <View style={styles.card}>
            <TouchableOpacity
                onPress={cardfuntion}
            >
                <ImageBackground source={eventimage} style={styles.eventimage}>
                    <View style={styles.datecon}>
                        <Text style={styles.datetext}>{eventdate}</Text>
                    </View>

                    <TouchableOpacity style={styles.addtofavorite}>
                        <Icon name='bookmark' size={14} color={COLORS.primaryOrangeHex} />
                    </TouchableOpacity>
                </ImageBackground>

                <View style={styles.eventdetails}>
                    <Text style={styles.eventtitle}>{eventname}</Text>
                    <View style={styles.infocontainer}>
                        <View style={styles.infoicon}>
                            <Image source={require('../../assets/users/user1.png')} style={styles.userimage} />
                            <Image source={require('../../assets/users/user2.png')} style={styles.userimage} />
                            <Image source={require('../../assets/users/user3.png')} style={styles.userimage} />
                            <Text style={styles.infotext}>  {`  +${numberofpeoplegoing} Going`}</Text>
                            <Text style={styles.infotime}> {eventime} </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.locationcontainer}>
                    <Icon name="map-marker-radius-outline" size={12} color={COLORS.primaryOrangeHex} />
                    <Text style={styles.locationtext}>{eventlocation}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.primaryDarkGreyHex,
        borderRadius: BORDERRADIUS.radius_10,
        marginVertical: SPACING.space_10,
        padding: SPACING.space_10,
        width: 260,
    },
    eventimage: {
        width: '100%',
        height: 150,
        borderRadius: BORDERRADIUS.radius_10,
        overflow: 'hidden',
        justifyContent: 'flex-end',
    },
    eventdetails: {
        padding: SPACING.space_10,
    },
    datecon: {
        backgroundColor: COLORS.primaryBlackHex,
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 3,
        position: 'absolute',
        top: 10,
        left: 10,
    },
    datetext: {
        color: COLORS.primaryLightHex,
        fontFamily: FONTFAMILY.poppins_extralight,
        fontSize: FONTSIZE.size_10,
    },
    addtofavorite: {
        backgroundColor: COLORS.primaryBlackHex,
        borderRadius: 3,
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 5,
        fontFamily: FONTFAMILY.poppins_light,
    },
    eventtitle: {
        fontFamily: FONTFAMILY.poppins_bold,
        fontSize: FONTSIZE.size_12,
        color: COLORS.primaryWhiteHex,
        marginBottom: SPACING.space_10 - 5,
        letterSpacing: 1,
    },
    infocontainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoicon: {
        flexDirection: 'row',
        marginRight: 'auto',
        alignItems: 'center',
    },
    userimage: {
        width: 25,
        height: 25,
        borderRadius: BORDERRADIUS.radius_10,
        marginRight: -10,
    },
    infotext: {
        marginLeft: SPACING.space_10 - 5,
        fontSize: FONTSIZE.size_10,
        fontFamily: FONTFAMILY.poppins_extralight,
        color: COLORS.primaryWhiteHex,
    },
    infotime: {
        marginLeft: SPACING.space_15,
        fontSize: FONTSIZE.size_10 + 1,
        fontFamily: FONTFAMILY.poppins_extralight,
        color: COLORS.primaryWhiteHex,
    },
    locationcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationtext: {
        marginLeft: SPACING.space_10 - 5,
        marginTop: SPACING.space_10 - 5,
        fontSize: FONTSIZE.size_10,
        letterSpacing: 1,
        textTransform: 'capitalize',
        fontFamily: FONTFAMILY.poppins_extralight,
        color: COLORS.primaryWhiteHex,
    },

})

export default Eventcard

