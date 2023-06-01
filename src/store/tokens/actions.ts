import { Produto } from "../../model/Produto"

export type Action = { type: "ADD_TO_CART"|"ADD_TOKEN"|"ADD_ID"|"REMOVE_ITEM", payload: any }

export const addToken = (token: string): Action => ({
	type: "ADD_TOKEN",
	payload: token
})

export const addId = (id: string): Action => ({
	type: "ADD_ID",
	payload: id
})

export const addToCart = (id: Produto): Action => ({
	type: "ADD_TO_CART",
	payload: id
})

export const removeItem = (id: Produto[]): Action =>({
	type: "REMOVE_ITEM",
	payload: id
})
