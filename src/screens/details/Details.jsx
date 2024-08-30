import React from 'react'
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, TextInput, FlatList } from 'react-native'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING, BORDERRADIUS } from '../../theme/theme'

import { Imagebginfo } from '../../components';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { events } from '../../theme/events'


const Details = ({ navigation, route }) => {
    // console.log("router =", route.params)

    const { id } = route.params;
    const event = events.find(event => event.id === id);

    const goback = () => {
        navigation.pop();
    }

    return (
        <View style={styles.container}>

            <ScrollView
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollviewflex}
            >

                <Imagebginfo
                    imagelink={event.eventImage}
                    enablebackhandle={true}




                    backhandler={goback}
                    tooglefavorite={() => { }}
                />





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
    text: {
        color: COLORS.primaryWhiteHex,
        fontSize: 18,
        marginBottom: 10,
    },
});


export default Details

