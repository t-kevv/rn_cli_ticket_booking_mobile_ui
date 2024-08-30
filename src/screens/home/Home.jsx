import React from 'react'
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, TextInput, FlatList } from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING, BORDERRADIUS } from '../../theme/theme'
import { Headerbar, Categories, Eventcard } from '../../components'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { events } from '../../theme/events'

const Home = ({ navigation }) => {
    const tabBarHeight = useBottomTabBarHeight();

    return (
        <View style={styles.container}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollviewflex}
            >
                <Headerbar />

                <Text style={styles.screentitle}>Find the best{'\n'}events for you</Text>

                <View style={styles.inputcontainer}>
                    <TouchableOpacity onPress={() => { }}>
                        <Icon name='database-search' size={FONTSIZE.size_18} color={COLORS.primaryLightGreyHex}
                            style={styles.inputicon}
                        />
                    </TouchableOpacity>
                    <TextInput
                        placeholder='Find events...'
                        placeholderTextColor={COLORS.primaryLightGreyHex}

                        style={styles.textinputcontainer}
                    />
                </View>

                <View>
                    <Categories />
                </View>


                <Text style={styles.text}>upcoming events</Text>
                <View style={styles.subcard}>
                    <FlatList
                        data={events}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.containergap}
                        renderItem={({ item }) => <Eventcard
                            eventimage={item.eventImage}
                            eventname={item.eventName}
                            eventdate={item.eventDate}
                            numberofpeoplegoing={item.numberOfPeopleGoing.count}
                            eventlocation={item.eventLocation}
                            eventime={item.eventtime}
                            cardfuntion={() => {
                                navigation.navigate('Details', {
                                    id: item.id,
                                    category: item.category,
                                })
                                // console.log("click")
                            }}
                        />}

                    />
                </View>

                <Text style={styles.text}>nearby events</Text>
                <View style={styles.subcard}>
                    <FlatList
                        data={events}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.containergap}
                        renderItem={({ item }) => <Eventcard
                            eventimage={item.eventImage}
                            eventname={item.eventName}
                            eventdate={item.eventDate}
                            numberofpeoplegoing={item.numberOfPeopleGoing.count}
                            eventlocation={item.eventLocation}
                            eventime={item.eventtime}
                            cardfuntion={() => {
                                navigation.navigate('Details', {
                                    id: item.id,
                                    category: item.category,
                                })
                                // console.log("click")
                            }}
                        />}

                    />
                </View>


            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primaryBlackHex,
    },
    scrollviewflex: {
        flexGrow: 1,
    },
    screentitle: {
        fontSize: FONTSIZE.size_20,
        fontFamily: FONTFAMILY.poppins_semibold,
        color: COLORS.primaryWhiteHex,
        paddingLeft: SPACING.space_30,
    },
    inputcontainer: {
        flexDirection: 'row',
        marginTop: SPACING.space_10,
        margin: SPACING.space_30,
        marginBottom: SPACING.space_16,
        borderRadius: BORDERRADIUS.radius_10,
        backgroundColor: COLORS.primaryDarkGreyHex,
        alignItems: 'center',
    },
    inputicon: {
        marginHorizontal: SPACING.space_20,
    },
    textinputcontainer: {
        flex: 1,
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_14,
        color: COLORS.primaryWhiteHex,
    },
    subcard: {
        paddingHorizontal: SPACING.space_10,
        paddingBottom: SPACING.space_10 - 4 - 5,
    },
    containergap: {
        gap: SPACING.space_18,
    },
    text: {
        fontFamily: FONTFAMILY.poppins_extrabold,
        fontSize: FONTSIZE.size_12,
        color: COLORS.primaryWhiteHex,
        paddingHorizontal: SPACING.space_10 + 4,
        paddingTop: SPACING.space_10,
        textTransform: 'capitalize',
    },
});

export default Home

