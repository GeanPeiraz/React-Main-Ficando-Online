import api from '../api';

export async function criarUsuario (login, avatar_url, name, email, followers, following, id) {
    try {
        await api.post(`/users/`, {
            
            login: login,
            avatar_url: avatar_url,
            name: name,
            followers: followers,
            following: following,
            id
        });
        return 'sucesso'
    } catch (error){
        console.log(error)
        return 'erro'
    }
}