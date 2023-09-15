import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, TextInput, Alert, ScrollView } from "react-native";
import { buscarUsuario } from "../../servicos/requisicoes/usuarios";
import estilos from "./estilos";

export default function Principal ({ navigation }) {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [usuario, setUsuario] = useState({});

    async function busca(){
        const resultado = await buscarUsuario(nomeUsuario)
        console.log(resultado);

        setNomeUsuario('')
        if (resultado) {
            setUsuario(resultado)
        } else {
            Alert.alert('Usuario não encontrado')
            setUsuario({})
        }
    };

    return (
        <ScrollView>
            <View style={estilos.container}>
                {
                    usuario?.login &&
                <>
                    <View style={estilos.fundo} />
                    <View style={estilos.imagemArea}>
                        <Image source={{ uri: usuario.avatar_url}} style={estilos.imagem} />
                    </View>
                    <Text style={estilos.textoNome}>{usuario.name}</Text>
                    <Text style={estilos.textoEmail}>{usuario.email}</Text>
                    <View style={estilos.seguidoresArea}>
                        <View style={estilos.seguidores}>
                            <View style={estilos.seguidoresNumero}>{usuario.followers}</View>
                            <View style={estilos.seguidoresTexto}>Seguidores</View>
                        </View>
                        <View style={estilos.seguidores}>
                            <View style={estilos.seguidoresNumero}>{usuario.following}</View>
                            <View style={estilos.seguidoresTexto}>Seguindo</View>
                        </View>
                    </View>
                </>
                };

                <TextInput
                    placeholder="busque por um usuario"
                    autoCapitalize="none"
                    style={estilos.entrada}
                    value={nomeUsuario}
                    onChangeText={setNomeUsuario}
                />

                <TouchableOpacity style={estilos.botao}
                    onPress={busca}
                >
                    <Text style={estilos.textoBotao}>
                        Buscar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Cadastrar')}
                >
                    Cadastrar novo Usuario
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
};