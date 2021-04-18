import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    createUser: function(userData) {
        return axios.post("/api/profile/signup", userData)
    },
    loginUser: query => {
        return axios.post("api/login", 
            {
                email: query.email, 
                password:query.password
            })
    },
    newSymptom: function(userData) {
        return axios.post("api/symptoms", userData)
    }
}