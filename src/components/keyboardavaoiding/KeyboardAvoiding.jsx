import { StyleSheet, KeyboardAvoidingView, Keyboard, ScrollView, Pressable, Platform } from 'react-native'
import React from 'react'

const KeyboardAvoiding = (props) => {
    return (
        <KeyboardAvoidingView
            style={styles.contain}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={60}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <Pressable onPress={Keyboard.dismiss}>{props.children}</Pressable>
            </ScrollView>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: 'transparent',
    }
})

export default KeyboardAvoiding
