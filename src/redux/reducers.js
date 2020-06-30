import { combineReducers } from "redux"
import types from './actions_type'

function channel(state = 0, action) {
    switch (action.type) {
        case types.SET_ACTIVED_CHANNEL:
            return action.data
        default: return state
    }
}
const Reducer = combineReducers({
    channel,
})
export default Reducer