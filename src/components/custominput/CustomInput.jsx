import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SPACING } from '../../theme/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomInput = ({ label, iconName, placeholder, onChangeText, value, isPassword }) => {

    const [hidePassword, setHidePassword] = useState(true);

    const togglePasswordVisibility = () => {
        setHidePassword(!hidePassword);
    };

    return (
        <View style={styles.inputContainer}>
            <Icon name={iconName} size={25} color={COLORS.primaryBlueHex} style={styles.inputLeftIcon} />
            <Text style={styles.smallText}>{label}</Text>
            <TextInput
                style={[styles.input,]}
                placeholder={placeholder}
                placeholderTextColor={COLORS.primaryLightGreyHex}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={isPassword && hidePassword}
                placeholderStyle={styles.placeholder}
            />
            {isPassword && <TouchableOpacity style={styles.eyeIconContainer} onPress={togglePasswordVisibility}>
                <Icon name={hidePassword ? 'eye-off' : 'eye'} size={25} color={COLORS.primaryBlueHex} style={styles.inputRightIcon} />
            </TouchableOpacity>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: SPACING.space_2 + 3,
    },
    smallText: {
        fontSize: 14,
        color: COLORS.primaryWhiteHex,
        textAlign: 'left',
        textTransform: 'capitalize',
        fontFamily: 'Poppins-SemiBold',
    },
    input: {
        backgroundColor: COLORS.primaryBlackRGBA,
        padding: SPACING.space_15,
        paddingLeft: SPACING.space_30 + 35,
        paddingRight: SPACING.space_30 + 25,
        borderRadius: 10,
        fontSize: 16,
        height: 50,
        marginTop: 3,
        marginBottom: 10,
        color: COLORS.primaryWhiteHex,
        borderWidth: 1,
        borderColor: COLORS.primaryLightGreyHex,
    },
    placeholder: {
        fontSize: 12,
        color: COLORS.primaryLightGreyHex,
    },
    inputLeftIcon: {
        position: 'absolute',
        top: 40,
        left: 15,
        zIndex: 1,
        borderRightWidth: 2,
        borderColor: COLORS.primaryLightGreyHex,
        paddingRight: 10,
    },
    inputRightIcon: {
        position: 'absolute',
        top: 20,
        right: 15,
        zIndex: 1,
    },
    eyeIconContainer: {
        position: 'absolute',
        top: 20,
        right: 15,
        zIndex: 1,
    },
});

export default CustomInput;
