//Vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        owner_links: [],
        projects: [],
        owner_image_url: ''
    },
    mutations: {
        setOwnerLinks: (state, ownerLinks) => {
            return state.owner_links = ownerLinks
        },
        setProjects: (state, projects) => {
           return state.projects = projects
        },
        setOwnerImageUrl: (state, url) => {
            return state.owner_image_url = url
        }
    },
    getters: {
        asyncOwnerLinks: (state) => {
            return state.owner_links
        },
        asyncProjects: (state) => {
            return state.projects
        },
        ownerImageUrl: (state) => {
            return state.owner_image_url
        }
    }
})