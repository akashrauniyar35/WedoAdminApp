
import AsyncStorage from '@react-native-async-storage/async-storage';
import { endPoint } from './index'





export const userLogin = (data: any) => {
    // console.log("API", data)

    return new Promise(async (resolve, reject) => {

        const storeAccessToken = async (value: string) => {
            try {
                await AsyncStorage.setItem('@access_Token', value)
            } catch (e) {
                // saving error
            }
        }



        try {
            const res: any = await endPoint.post("customer/login", data)
            // console.log("DATA", res.data);
            resolve(res.data);
            // dispatch(loginSuccess(res))
            if ((res.data.status === "success")) {
                // storeAccessToken(res.data.accessJWT)

                try {
                    await AsyncStorage.setItem('@access_Token', res.data.accessJWT)
                } catch (e) {
                    console.log('async storage error', e)
                }

                // console.log("DATA", res.data);
                // console.log("accessJWT", res.data.accessJWT);
                // console.log("refreshJWT", res.data.refreshJWT)
            }
        } catch (error: any) {
            reject(error.data);

        }
    })
}