import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "ca29b60a-13f3-46dd-b81c-6d2e0d02ab80"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 1, pageNumber) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}&${pageNumber}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId){
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow(userId){
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    }
}