//Vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        projects: []
    },
    mutations: {
        setProjects: (state, projects) => {
           return state.projects = projects
        }
    },
    getters: {
        asyncProjects: (state) => {
            return state.projects
        }
    }
})