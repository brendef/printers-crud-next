import { deleteRequest, getRequest, postRequest } from 'assets'

export const post = async ({
    path = '',
    bodyParams,
    useBaseURL = false,
}: postRequest) => {
    const usePath = useBaseURL ? useBaseURL + path : path
    try {
        const url = usePath

        const params: RequestInit = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Accept: "application/json",
            },
            redirect: "follow",
            body: JSON.stringify(bodyParams),
        };

        const response = await fetch(url, params)
        const jsonResponse = response.json()
        
        return jsonResponse

    } catch (error) { return error }

}

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

export const del = async ({
    path = '',
    useBaseURL = false,
}: deleteRequest) => {
    const usePath = useBaseURL ? useBaseURL + path : path
    try {
        const url = usePath

        const params: RequestInit = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Accept: "application/json",
            },
            redirect: "follow",
        };

        const response = await fetch(url, params)
        const jsonResponse = response.json()
        
        return jsonResponse

    } catch (error) { return error }

}
