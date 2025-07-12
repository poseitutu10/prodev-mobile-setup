import { Tabs } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
  return (
    <Tabs>
        <Tabs.Screen name='Home' />
        <Tabs.Screen name='Search' />
        <Tabs.Screen name='Saved' />
        <Tabs.Screen name='Inbox' />
        <Tabs.Screen name='Profile' />
    </Tabs>
  )
}

export default TabsLayout