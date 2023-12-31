import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

import Principal from './paginas/Principal';
import Cadastrar from './paginas/CriarUsuario';

export default function Rotas() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Principal" options={{ title: "Perfil" }} component={Principal} />
                <Tab.Screen name="Cadastrar" options={{ title: "Cadastrar" }} component={Cadastrar} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}