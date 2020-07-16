import types from './actions_type'
const _actions = {

}
// 当前激活的频道
_actions.setActivedChannel = (channel) => ({
    type: types.SET_ACTIVED_CHANNEL,
    data: { 'activedChannel': channel }
})
// 当前激活的空间
_actions.setActivedSpace = (space) => ({
    type: types.SET_ACTIVED_SPACE,
    data: { 'activedSpace': space }
})
// 当前激活的Panel
_actions.setActivedPanel= (panel) => ({
    type: types.SET_ACTIVED_PANEL,
    data: { 'activedPanel': panel }
})


export const actions = { ..._actions }
