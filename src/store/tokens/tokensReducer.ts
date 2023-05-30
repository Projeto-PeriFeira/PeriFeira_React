import { Action } from "./actions"
import { Produto } from "../../model/Produto"

export interface TokenState {
  tokens: string
  id: string

	produtos: Array<Produto>
}

const initialState = {
  tokens: '',
  id: '',
	produtos: []
}

export const tokenReducer = (state: TokenState = initialState, action: Action) => {
  switch(action.type) {
    case "ADD_TOKEN": {
      return {...state, tokens: action.payload}
    }
    case "ADD_ID": {
      return {...state, id: action.payload}
    }
		case "ADD_TO_CART": {
			return {
			... state, produtos: [... state.produtos, action.payload]
		}
		}
		case "REMOVE_ITEM": {
			return {
				...state, produtos: []
			}
		}
    default: return state
  }
}
