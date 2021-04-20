import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    create: function(userData) {
        return axios.post("/api/user/signup", userData)
    },
    login: (userData)=> {
        return axios.post('/api/user/login', userData)
    },
    currentUser: () => {
      return axios.get('/api/user/current')
    },

    newSymptom: function(userData) {
        return axios.post("api/user/symptom", userData)

    },
    logout: () => {
        return axios.get('/api/user/logout')
    },
    populate: function(symptomData) {
      return axios.get("/populated", symptomData)
    }
}