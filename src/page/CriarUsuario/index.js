import React, {useState} from "react";
import { Text, View, TouchableOpacity, TextInput, Alert, ScrollView } from "react-native-web";
import { criarUsuario } from "../../service/requisicoes/criarUsuarios";

export default function Cadastrar ({navigation}) {
    const [login, setLogin] = useState ('');
    const [avatar_url, setAvatar_url] = useState ('');
    const [name, setName] = useState ('');
    const [email, setEmail] = useState ('');
    const [followers, setFollowes] = useState ('');
    const [following, setFollowings] = useState ('');
    const [id, setId] = useState ('');

    async function criar () {
        const resultado = await  criarUsuario (
            login,
            avatar_url,
            name,
            email,
            followers,
            following,
            id
        )
        if (resultado === 'sucesso'){
            Alert.alert('Usuario criado com sucesso!')
            navigation.goBack();
        } else {
            Alert.alert('Erro ao criar ususario')
        }
    }

    return (
        <ScrollView>
            <Text>
                Novo Usuario
            </Text>

            <TextInput 
            type='text'
            value={login}
            placeholder='Insira o login do usuario'
            onChangeText={setLogin}
            />

            <TextInput 
            type='text'
            value={avatar_url}
            placeholder='Insira a URL da imagem'
            onChangeText={setAvatar_url}
            />

            <TextInput 
            type='text'
            value={email}
            placeholder='Insira o E-mail do usuario'
            onChangeText={setEmail}
            />

            <TextInput 
            type='text'
            value={followers}
            placeholder='Seguidores'
            onChangeText={setFollowes}
            />

            <TextInput 
            type='text'
            value={following}
            placeholder='Seguindo'
            onChangeText={setFollowings}
            />    

            <TextInput
            type='text'
            value={id}
            placeholder='Insira o ID'
            onChangeText={setId}
            />

            <TouchableOpacity onPress={criar}>
                <Text>
                    Cadastrar
                </Text>
            </TouchableOpacity>
        </ScrollView>
    )

}