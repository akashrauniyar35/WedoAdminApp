import AsyncStorage from '@react-native-async-storage/async-storage';
import { endPoint } from './index';

export const fetchAllQuotes = (data: any) => {
    console.log("searchValue", data)
    return new Promise(async (resolve, reject) => {

        try {
            const res: any = await endPoint.get("quote/all?page=1&limit=10")
            console.log(res)
            resolve(res);

        }
        catch (err) {
            console.log(err)
            reject(err)
        }

    })
}


export const searchQuote = (data: any) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res: any = await endPoint.get(`quote/all?page=1&limit=10&search=${data}`)
            // console.log(res)
            resolve(res);
        }
        catch (err) {
            console.log(err)
            reject(err)
        }

    })
}

export const fetchQuoteByID = (quoteID: any) => {
    console.log("fetch triggered", quoteID)
    return new Promise(async (resolve, reject) => {

        try {
            const res: any = await endPoint.get(`quote/${quoteID}`)
            resolve(res);
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

