import axios from "axios";
import passport from "passport";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    create: function(userData) {
        return axios.post("/api/user/signup", userData)
    },
    login: ()=> {
        return axios.post('/login',
        passport.authenticate('local'),
        function(req, res) {
          res.send(req.user);
        }
      );
    },
    symptom: function(userData) {
        return axios.post("api/user/symptom", userData)

    },
    logout: () => {
        return axios.get('/logout', function(req, res){
            req.logout();
            res.send(null)
          });
    }
}