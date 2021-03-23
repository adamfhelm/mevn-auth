import axios from 'axios'
import Vue from 'vue'

const vm = new Vue
const menuURL = 'http://localhost:3000/api/menu/'

const handleError = fn => (...params) =>
    fn(...params).catch(error => {
        vm.flash(`${error.response.status}: ${error.response.statusText}`, 'error')
    })
export const api = {
    createMenu: handleError(async payload => {
        const res = await axios.post(menuURL, payload)
        return res.data
    }),
    getMenu: handleError(async id => {
        const res = await axios.get(menuURL + id)
        return res.data
    }),
    // getSubMenuToUpdate: handleError(async (id, subMenu) => {
    //     //console.log("parms", id, subMenu)
    //     const params = {
    //         queryid: id,
    //         querymenu: subMenu
    //     } 
    //     const res = await axios.get(menuURL + params)
    //      return res.data
    // }),
    getMenus: handleError(async () => {
        const res = await axios.get(menuURL)
        return res.data
    }),
    deleteMenu: handleError(async id => {
        const res = await axios.delete(menuURL + id)
        return res.data
    }),
    updateMenu: handleError(async payload => {
        const res = await axios.put(menuURL + payload._id, payload)
        return res.data
    })
}
