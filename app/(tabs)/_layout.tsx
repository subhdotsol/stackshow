import { Tabs } from 'expo-router'
import React from 'react'

const _layout = () => {
  return (
        <Tabs>
            <Tabs.Screen name='index' 
            options={{
                headerShown : false, 
                title : "Home"
            }}>
            </Tabs.Screen>
            <Tabs.Screen name='search'
            options={{
                title : "search",
                headerShown : false
            }}>
            </Tabs.Screen>
            <Tabs.Screen name='saved'
            options={{
                title : "saved",
                headerShown : false
            }}>
            </Tabs.Screen>
            <Tabs.Screen name='profile'
            options={{
                title : "profile",
                headerShown : false
            }}>
            </Tabs.Screen>
        </Tabs>

)
}

export default _layout