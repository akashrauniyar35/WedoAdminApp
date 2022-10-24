import AsyncStorage from '@react-native-async-storage/async-storage';
import { endPoint } from './index';

export const fetchAllJobs = (page: any) => {
    console.log("page", page)
    return new Promise(async (resolve, reject) => {

        try {
            const res: any = await endPoint.get(`quote/all?page=${page}&limit=10`)
            console.log(res)
            resolve(res);

        }
        catch (err) {
            console.log(err)
            reject(err)
        }

    })
}


export const fetchSearch = (data: String) => {

    // const searchEnabled = data.length == 3 ? true : false

    return new Promise(async (resolve, reject) => {
        try {
            const res: any = await endPoint.get(`quote/all?page=1&search=${data}`)
            // console.log(res)
            resolve(res);
        }
        catch (err) {
            console.log(err)
            reject(err)
        }

    })
}

export const fetchJobByID = (quoteID: any) => {
    console.log("fetch triggered", quoteID)
    return new Promise(async (resolve, reject) => {

        try {
            const res: any = await endPoint.get(`quote/${quoteID}`)
            resolve(res);
            console.log('RESPOND', res)
        }
        catch (err) {
            console.log(err)
            reject(err)
        }

    })
}

export const ABC = (data: any) => {
    return new Promise(async (resolve, reject) => {

        try {
        }
        catch (err) {
            console.log(err)
            reject(err)
        }

    })
}

