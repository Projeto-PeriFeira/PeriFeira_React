import { Action } from "./actions"

export interface TokenState {
  tokens: string
  id: string
}

const initialState = {
  tokens: '',
  id: ''
}

export const tokenReducer = (state: TokenState = initialState, action: Action) => {
  switch(action.type) {
    case "ADD_TOKEN": {
      return {...state, tokens: action.payload}
    }
    case "ADD_ID": {
      return {...state, id: action.payload}
    }
    default: return state
  }
}
