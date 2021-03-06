import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    // User related API calls
    create: function(userData) {
        return axios.post('/api/user/signup', userData)
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
    loadTreatment: function() {
      return axios.get('api/user/management')
    },

    //Symptom related API calls
    newSymptom: function(userData) {
        return axios.post('api/symptom/', userData)
    },
    populate: function(symptomData) {
      return axios.get('/populated', symptomData)
    },
    loadSavedSymptoms: () => {
      return axios.get('api/symptom')
    },
    deleteSymptom: (id) => {
      return axios.delete('api/symptom/' +id);
    },
    updateSymptombyId: (id) => {
      return axios.update('api/symptom/'+id);
    },

    // Optometrist related API calls
    optomLogin: (userData)=> {
      return axios.post('/api/optom/login', userData)
    },
    optomSignUp: function(userData) {
      return axios.post('/api/optom/signup', userData)
    },
    optomLogout: () => {
      return axios.get('/api/optom/logout')
    },
    findPatient: (userData) => {
      const queryParams = `?name=${userData.name}&email=${userData.email}&birthday=${userData.birthday}`;
      return axios.get(`api/optom/patient${queryParams}`, userData)
    },
    loadPatient: () => {
      return axios.get('api/optom')
    },
    // submitPlan:  function(treatmentData) {
    //   return axios.post('/api/optom/treatment', treatmentData)
    // },
    currentOptomUser: () => {
      return axios.get('/api/optom/current')
    },

    //Management related API calls
    newManagement: function(userData) {
      return axios.post('api/management/', userData)
    },
    loadManagementPlan: () => {
      return axios.get('api/management')
    },
    deleteSavedPlan: (id) => {
      return axios.delete('api/management/' +id);
    },
    
} 