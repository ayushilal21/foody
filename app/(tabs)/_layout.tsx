import {Redirect, Slot, Tabs} from "expo-router";
import {Image, Text, View} from "react-native";
import {images} from "@/constants";
import cn from "clsx";

export default function TabLayout() {
    const isAuthenticated = true;

    if(!isAuthenticated) return <Redirect href="/sign-in" />

    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                marginHorizontal: 20,
                height: 80,
                position: 'absolute',
                bottom: 40,
                backgroundColor: 'white',
                shadowColor: '#1a1a1a',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 5
            }
        }}>
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                }}
            />
            <Tabs.Screen
                name='search'
                options={{
                    title: 'Search',
                }}
            />
            <Tabs.Screen
                name='cart'
                options={{
                    title: 'Cart',
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                }}
            />
        </Tabs>
    );
}