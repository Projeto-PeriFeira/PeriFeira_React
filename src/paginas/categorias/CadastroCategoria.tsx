import React, { useState, useEffect, ChangeEvent } from 'react'
import './CadastroProduto.css'
import useLocalStorage, { useHistory, useNavigate, useParams } from 'react-router-dom'
import Categoria from '../../model/Categoria'
import { busca } from '../../services/Service'

function CadastroProduto() {

	let history = useHistory()
		// const navigate = useNavigate()

		useEffect(() => {
				if (token == "") {
				alert("Voce precisa estar logado!")
				// navigate("/login")
				history.push("/login")
				}
				}, [token])

	const { id } = useParams<{id: string}>()
		const [ categoria, setCategoria ] = useState<Categoria>({
id: 0,
descricao: ''
})

useEffect(() => {
	if(id !== undefined) {
		buscaId(id)
	}
}, [id])

const [token, setToken] = useLocalStorage('token')

async function buscaId(id: string) {
	busca(`/cadegoria/${id}`, setCategoria, {
		headers: {
			'Authorization': token
		}
	})
}

function updatedTema(e: ChangeEvent<HTMLInputElement>) {
	setCategoria({
		...categoria,
		[e.target.name]: e.target.value,
	})
}

return (
		<>

		</>
		)
}
export default CadastroProduto
