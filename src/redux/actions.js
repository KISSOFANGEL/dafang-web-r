import types from './actions_type'


// 当前激活的频道
export const setActivedChannel = (channel) => ({
    type: types.SET_ACTIVED_CHANNEL,
    data: {'activedChannel':channel}
})

export const actions = {setActivedChannel}
