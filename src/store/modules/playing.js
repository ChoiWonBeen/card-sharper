const state= {
    playing: 'user'
}

const getters = {
    playing: function (state) {
        return state.playing
    }
}

const  mutations = {
    userPlaying: function (state) {
        state.playing = 'user'
    },
    opponentPlaying: function (state) {
        state.playing = 'opponent'
    }
}

export default { state, getters, mutations }