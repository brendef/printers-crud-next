import { getPrintersData } from "data/printers";

export const getPrinters = async () => {
    return await getPrintersData()
        .then(response => {
            return response
        })
}