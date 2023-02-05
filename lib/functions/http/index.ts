import { getRequest, postRequest } from 'assets'

// export const post = async ({
//     path = '',
//     bodyParams,
//     useBaseURL = false,
// }: postRequest) => {
//     const usePath = useBaseURL ? useBaseURL + path : path
//     try {
//         const url = usePath

//         var urlencoded = new URLSearchParams();
//         bodyParams.map((params: any, key:any) => {
//             const entries = Object.entries(params)[0]
            
//             urlencoded.append(entries[0], String(entries[1]))
//         })

//         const params: RequestInit = {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/x-www-form-urlencoded",
//                 Accept: "application/json",
//             },
//             redirect: "follow",
//             body: urlencoded,
//         };

//         const response = await fetch(url, params)
//         const jsonResponse = response.json()
        
//         return jsonResponse

//     } catch (error) { return error }

// }

export const get = async ({ path = '', useBaseURL = false }: getRequest) => {
    const usePath = useBaseURL ? useBaseURL + path : path
    try {
        const url = usePath
        
        const response = await fetch(url)
        const jsonResponse = await response.json()

        return jsonResponse
    } catch (error) {
        console.log(error)
    }
}