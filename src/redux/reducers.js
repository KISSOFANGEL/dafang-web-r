import { combineReducers } from "redux"
import types from './actions_type'

function channel(state = 0, action) {
    switch (action.type) {
        case types.SET_ACTIVED_CHANNEL:
            return action.data
        default: return state
    }
}
function space(state = 0, action) {
    switch (action.type) {
        case types.SET_ACTIVED_SPACE:
            return action.data
        default: return state
    }
}
function panel(state = 0, action) {
    switch (action.type) {
        case types.SET_ACTIVED_PANEL:
            return action.data
        default: return state
    }
}

function addSpace(state = 0, action) {
    switch (action.type) {
        case types.SET_ADD_SPACE:
            return action.data
        default: return state
    }
}

function addPanel(state = 0, action) {
    switch (action.type) {
        case types.SET_ADD_PANEL:
            return action.data
        default: return state
    }
}

const Reducer = combineReducers({
    channel, space, panel, addPanel, addSpace
})
export default Reducer