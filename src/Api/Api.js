import React from 'react'
import * as axios from "axios";


const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
     'API-KEY': 'b6a2753a-cce4-4557-b52f-9156d221ff98'
    }
})

export  const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        const promise = instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => {
            return res.data
        })
        return promise
    },
    unfollow(id) {
        const promise = instance.delete(`follow/${id}`).then(res => {
            return res.data
        })
        return promise

    },
    follow(id) {
        const promise = instance.post(`follow/${id}`).then(res => {
            return res.data
        })
        return promise
    },
    getProfile(userId) {
        console.warn('Obsolete method profileAPI object')
      // const promise = profileAPI.getProfile(userId)
      // return promise
        return profileAPI.getProfile(userId)
    }


}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
        // const promise = instance.get(`profile/` + userId).then(res => {
        //     return res.data
        // })
        // return promise
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
        // const promise =  instance.get(`profile/status/` + userId).then(res => {
        //     return res.data
        // })
        // return promise
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
        // const promise = instance.put(`profile/status`, {status: status}).then(res => {
        //     return res.data
        // })
        // return promise

    }
}


export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}








