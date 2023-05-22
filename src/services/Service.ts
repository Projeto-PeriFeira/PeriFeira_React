import axios from "axios";

export const api = axios.create({
    baseURL: 'https://db-perifeira.onrender.com/swagger-ui/'
}) 

export const cadastroUsuario = async (url: string, dados: object, setDados: any) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const login = async (url: string, dados: object, setDados: any) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data.token)
}

