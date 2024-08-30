import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, } from 'react-native'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING, BORDERRADIUS } from '../../theme/theme'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Imagebginfo = ({
    enablebackhandle, imagelink, eventname, eventid,
    eventlocation, evendate, numberofpeoplegoing, eventime, backhandler,
    category, organizername, organizerpictire, tooglefavorite,
}) => {
    return (
        <View>
            <ImageBackground source={imagelink} style={styles.itemebackgroundimage}>

                {
                    enablebackhandle ? (
                        <>
                            <View style={styles.imageheaderbarcontainerwithback}>
                                <TouchableOpacity onPress={backhandler}>
                                    <Icon name='reply-all-outline' size={FONTSIZE.size_16} color={COLORS.primaryLightHex}
                                        style={styles.inputicon}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={tooglefavorite}>
                                    <Icon name='bookmark' size={FONTSIZE.size_16} color={COLORS.primaryLightHex}
                                        style={styles.inputicon}
                                    />
                                </TouchableOpacity>
                            </View>
                        </>
                    ) : (
                        <>
                            <View style={styles.imageheaderbarcontainerwithoutback}>
                                <TouchableOpacity>
                                    <Icon name='bookmark' size={FONTSIZE.size_18} color={COLORS.primaryLightGreyHex}
                                        style={styles.inputicon}
                                    />
                                </TouchableOpacity>
                            </View>
                        </>
                    )
                }



            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    itemebackgroundimage: {
        width: '100%',
        aspectRatio: 29/ 25,
        justifyContent: 'space-between',
    },
    imageheaderbarcontainerwithback: {
        padding: SPACING.space_30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    imageheaderbarcontainerwithoutback: {
        padding: SPACING.space_30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    inputicon: {
        backgroundColor: COLORS.primaryBlackHex,
        padding: SPACING.space_10 - 5,
        borderRadius: BORDERRADIUS.radius_4,
    },
})

export default Imagebginfo
