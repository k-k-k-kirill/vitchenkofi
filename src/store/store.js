//Vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        owner_links: [],
        projects: [],
        owner_image_url: '',
        request_offer_text_content: [],
        form_thank_you_message: '',
        visitor: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        formErrors: {
            email: '',
            message: ''
        }
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
        },
        setFormThankYouMessage: (state, content) => {
            return state.form_thank_you_message = content
        },
        setVisitorDataValue: (state, data) => {
            return state.visitor[data.key] = data.value
        },
        setFormErrorValue: (state, data) => {
            return state.formErrors[data.key] = data.value
        },
        clearFormErrors: (state) => {
            for( let key in state.formErrors ) {
                state.formErrors[key] = ""
            }

            return state.formErrors
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
        },
        visitorData: (state) => {
            return state.visitor
        },
        formErrors: (state) => {
            return state.formErrors
        }
    }
})