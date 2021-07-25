import * as axios from "axios";


const instance = axios.create(
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: {
            "API-KEY": "4bfabc4e-fb16-4cce-b138-421ee880ae4d"
        }
    }
);


export const usersAPI = {


    downloadUsers(currentPage = 1, pageSize = 5) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    friend(id) {
        return instance.post(`follow/${id}`);
    },

    unFriend(id) {
        return instance.delete(`follow/${id}`);
    },

    getProfile(userId) {
        return profileAPI.getProfile(userId);
    }
}



export const profileAPI = {

    getProfile(userId) {
        return instance.get(`profile/` + userId)

    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)

    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status})

    }
}

export const authAPI = {

    me() {
        return instance.get(`auth/me`)

    },

    login(email, password, rememberMe=false) {

        return instance.post('auth/login', { email, password, rememberMe })
    },

    logout() {

        return instance.delete('auth/login')
    }
}