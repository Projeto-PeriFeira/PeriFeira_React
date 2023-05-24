import axios from "axios";

export const api = axios.create({
    baseURL: ''
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

export const posta = async (url: string, dados: object, setDados: any, header: object) => {
    const resposta = await api.post(url, dados, header)
    setDados(resposta.data)
}

export const atualiza = async (url: string, dados: object, setDados: any, header: object) => {
    const resposta = await api.put(url, dados, header)
    setDados(resposta.data)
}

export const deleta = async (url: string, header: object) => {
    await api.delete(url, header)
}
