import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Home, Tickets, Upload, Map, Account } from '../screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, SPACING } from '../theme/theme';



import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Fontisto';

const Tab = createBottomTabNavigator();

const Tabnavigators = () => {
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarHideOnKeyboard: true,
                    tabBarStyle: styles.tabbarstyle,
                }}
            >


                <Tab.Screen name="Home" component={Home}
                    options={{
                        // animation: 'slide_from_bottom',
                        tabBarIcon: ({ focused, color, size }) => {
                            return <View >
                                <Icon name="home-lightbulb" size={25} color={focused ? COLORS.primaryBlueHex : COLORS.primaryLightGreyHex} />
                                {/*   */}
                            </View>;
                        },
                    }}
                />
                <Tab.Screen name="Tickets" component={Tickets}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => {
                            return <View>
                                <Icon1 name="ticket-alt" size={22} color={focused ? COLORS.primaryBlueHex : COLORS.primaryLightGreyHex} />
                            </View>;
                        },
                    }}
                />
                <Tab.Screen name="Upload" component={Upload}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => {
                            return <View>
                                <Icon name="water-plus" size={25} color={focused ? COLORS.primaryBlueHex : COLORS.primaryLightGreyHex} />
                            </View>;
                        },
                    }}
                />
                <Tab.Screen name="Map" component={Map}
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: ({ focused, color, size }) => {
                            return <View>
                                <Icon name="google-maps" size={25} color={focused ? COLORS.primaryBlueHex : COLORS.primaryLightGreyHex} />
                            </View>;
                        },
                    }}
                />
                <Tab.Screen name="Account" component={Account}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => {
                            return <View>
                                <Icon name="face-man-profile" size={25} color={focused ? COLORS.primaryBlueHex : COLORS.primaryLightGreyHex} />
                            </View>;
                        },
                    }}
                />

            </Tab.Navigator>

        </>
    )
}

const styles = StyleSheet.create({
    tabbarstyle: {
        backgroundColor: COLORS.primaryDarkGreyHex,
        borderTopWidth: 0,
        height: SPACING.space_8 * 10,
        elevation: 5,
    },
})

export default Tabnavigators

