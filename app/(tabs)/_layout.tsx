import { Tabs } from 'expo-router'
import React from 'react'

const _layout = () => {
  return (
        <Tabs>
            <Tabs.Screen name='index' options={{headerShown : false, 
                title : "Home"
            }}>
            </Tabs.Screen>
        </Tabs>
)
}

export default _layout