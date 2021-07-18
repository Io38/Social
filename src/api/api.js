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


export const getUsers = (currentPage = 1, pageSize = 5) => {

    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}

