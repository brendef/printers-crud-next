import { card } from 'assets'
import React from 'react'

export default ({
    title='Title',
    subTitle='subtitle',
    body='body',
    to='#',
    css=''
}: card) => {

    return (
        <div className={`max-w-md py-4 px-8 bg-white shadow-lg rounded-lg ${css}`}>
            <div>
                <h2 className="text-gray-800 text-3xl font-semibold">{title}</h2>
                <p className="mt-2 text-gray-600">{subTitle}</p>
                <p className="mt-2 text-gray-600">{body}</p>
            </div>
            <div className="flex justify-end mt-4">
                <a href={to} className="text-xl font-medium text-secondary-500">&rarr;</a>
            </div>
        </div>
    )
}