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
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`);
    },

    unFriend(id) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`);
    }
}


