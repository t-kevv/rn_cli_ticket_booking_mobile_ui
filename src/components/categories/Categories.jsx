import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING, BORDERRADIUS } from '../../theme/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import categories from './data';

const Catitem = ({ name, icon }) => (
    <View style={styles.card}>
        <View style={styles.iconcontainer}>
            <Icon name={icon} size={12} color={COLORS.primaryOrangeHex} />
        </View>
        <Text style={styles.catname}>{name}</Text>
    </View>
);

const Categories = () => {
    return (
        <FlatList
            data={categories}
            renderItem={({ item }) => <Catitem name={item.name} icon={item.icon} />}
            keyExtractor={(item) => item.name}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}
        />

    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.primaryDarkGreyHex,
        marginRight: SPACING.space_10,
        paddingVertical: SPACING.space_10 - 2,
        paddingHorizontal: SPACING.space_10,
        borderRadius: BORDERRADIUS.radius_10 - 5,
    },
    iconcontainer: {
        marginRight: SPACING.space_10,
    },
    catname: {
        fontFamily: FONTFAMILY.poppins_semibold,
        color: COLORS.primaryWhiteHex,
        fontSize: FONTSIZE.size_10,
        textTransform: 'lowercase',
    },
});

export default Categories;
