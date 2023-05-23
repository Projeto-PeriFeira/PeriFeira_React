import axios from "axios";

export const api = axios.create({
    baseURL: 'https://db-perifeira.onrender.com'
}) 

export const login = async (url: string, dados: object, setDados: any) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data.token)
}

export const cadastroUsuario = async (url: string, dados: object, setDados: any) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const busca = async (url: string, setDados: any, header: object) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}
