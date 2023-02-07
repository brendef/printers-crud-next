import { AppRouterInstance } from "next/dist/shared/lib/app-router-context"

export const BackButton = ({router}: {router: AppRouterInstance}) => {
    return (
        <div className='my-2'>
            <button className="py-2 px-4 w-full bg-secondary-500 hover:bg-secondary-700 text-white font-bold rounded focus:outline-none focus:shadow-outline" onClick={router.back} type='button'> Back </button>
        </div>
    )
}