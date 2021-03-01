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
    }
}








