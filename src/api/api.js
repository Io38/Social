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

        return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    friend(id) {
        return instance.post(`follow/${id}`);
    },

    unFriend(id) {
        return instance.delete(`follow/${id}`);
    },

    getProfile(userId) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
    }
}

export const authAPI = {

    me() {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)

    }
}
