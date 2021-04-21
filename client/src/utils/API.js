import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    // User related API calls
    create: function(userData) {
        return axios.post("/api/user/signup", userData)
    },
    login: (userData)=> {
        return axios.post('/api/user/login', userData)
    },
    currentUser: () => {
      return axios.get('/api/user/current')
    },
    logout: () => {
      return axios.get('/api/user/logout')
    },

    //Symptom related API calls
    newSymptom: function(userData) {
        return axios.post("api/symptom/", userData)
    },
    populate: function(symptomData) {
      return axios.get("/populated", symptomData)
    },
    loadSavedSymptoms: () => {
      return axios.get('api/symptom')
    },

    // Optometrist related API calls
    optomLogin: (userData)=> {
      return axios.post('/api/optom/login', userData)
    },
    optomSignUp: function(userData) {
      return axios.post("/api/optom/signup", userData)
    },
    optomLogout: () => {
      return axios.get('/api/optom/logout')
  },
    
}