//Vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        owner_links: [],
        projects: [],
        owner_image_url: '',
        request_offer_text_content: ''
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
        },
        setRequestOfferTextContent: (state, content) => {
            return state.request_offer_text_content = content
        }
    },
    getters: {
        asyncOwnerLinks: (state) => {
            return state.owner_links
        },
        asyncProjects: (state) => {
            return state.projects
        },
        asyncRequestOfferTextContent: (state) => {
            return state.request_offer_text_content
        },
        ownerImageUrl: (state) => {
            return state.owner_image_url
        }
    }
})