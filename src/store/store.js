//Vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        projects: [],
        owner_image_url: ''
    },
    mutations: {
        setProjects: (state, projects) => {
           return state.projects = projects
        },
        setOwnerImageUrl: (state, url) => {
            return state.owner_image_url = url
        }
    },
    getters: {
        asyncProjects: (state) => {
            return state.projects
        },
        ownerImageUrl: (state) => {
            return state.owner_image_url
        }
    }
})