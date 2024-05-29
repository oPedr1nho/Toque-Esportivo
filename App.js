import React from 'react';
import { useFonts, Montserrat_400Regular, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Filmes from './src/telas/Camisas'
import Sobre from './src/telas/Sobre'
import Produto from './src/telas/Produtos'
import mock from './src/mocks/produto'
import mock_sobre from './src/mocks/sobre'
import mock_filmes from './src/mocks/filmes'

function MenuKit() {
  return <Produto {...mock} />
}

function MenuFilmes() {
  return <Filmes {...mock_filmes} />;
}

function MenuSobre() {
  return <Sobre {...mock_sobre} />;
}

const Tab = createBottomTabNavigator();

function TabsMenu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'PACOTE') {
            iconName = focused ? 'cube' : 'cube-outline';
          } else if (route.name === 'SOBRE') {
            iconName = focused ? 'alert-circle' : 'alert-circle-outline';
          } else if (route.name === 'CAMISETAS') {
            iconName = focused ? 'shirt' : 'shirt-outline';
          } else if (route.name === 'DESEJOS') {
            iconName = focused ? 'cart' : 'cart-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#586e26',
        tabBarInactiveTintColor: '#586e26',
        tabBarHideOnKeyboard: true,
        headerShown: false,
      })}
    >
      <Tab.Screen name="SOBRE" component={MenuSobre} />
      <Tab.Screen name="PACOTE" component={MenuKit} />
      <Tab.Screen name="CAMISETAS" component={MenuFilmes} />
      <Tab.Screen name="DESEJOS" component={MenuKit} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [fonteCarregada] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratSemiBold: Montserrat_600SemiBold,
  });

  if (!fonteCarregada) {
    return <View />;
  }

  return (
    <NavigationContainer>
      <TabsMenu />
    </NavigationContainer>
  );
}
