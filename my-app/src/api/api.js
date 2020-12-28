import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers:{
        "API-KEY": "90ce7324-286f-412d-a2b5-0732b3cf100d"
    }
});

export const userApi = {
    getUsers(pageSize,pageNumber){
     return instance.get(`users?count=${pageSize}&page=${pageNumber}`)
             .then(response => { return response.data})
    },

    follow(userId){
        return instance.post(`follow/${userId}`).then(response => {return response.data})
    },

    unFollow(userId){
        return instance.delete(`follow/${userId}`).then(response => {return response.data})
    },



};

export const authApi = {
    getAuth(){
        return instance.get("auth/me").then(response => {return response.data})
    },
    loginUser(email,password,rememberMe,captcha = null) {
        return instance.post("auth/login",{email,password,rememberMe,captcha}).then(response => {return response.data})
    },
    logoutUser() {
        return instance.delete("auth/login").then(response => {return response.data})
    }
};

export const profileApi = {
    setUserProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => {
            return response.data
        })
    },
    updateUserProfile(profile) {
        return instance.put(`profile`, profile).then(response => {
            return response.data
        })
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => {
            return response.data
        })
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status}).then(response => {
            return response.data
        })
    },

    updatePhoto(photo) {
        const formData = new FormData();
        formData.append("image",photo)
        return instance.put(`profile/photo`, formData,{headers: {'Content-type': 'multipart/form-data'}})
    }
}

export const securityApi = {
    getCaptchaUrl(){
        return instance.get("security/get-captcha-url").then(response => {return response.data})
    },
};