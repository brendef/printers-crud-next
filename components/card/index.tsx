import { card } from 'assets'
import Link from 'next/link'

export default ({
    title='Title',
    subTitle='subtitle',
    body='body',
    to='#',
    css=''
}: card) => {

    return (
      <Link href={to}>
        <div className={`max-w-md py-4 px-8 bg-white shadow-lg rounded-lg ${css} hover:bg-light-100`}>
            <div className='flex flex-col justify-between'>
                <h2 className="text-gray-800 text-3xl font-semibold">{title}</h2>
                <p className="mt-2 text-gray-600">{subTitle}</p>
                <div>{body}</div>
            </div>
            <div className="flex justify-end mt-4">
                <p className="px-3 text-xl font-medium text-secondary-500 hover:bg-light-200">&rarr;</p>
            </div>
        </div>
      </Link>
    )
}
