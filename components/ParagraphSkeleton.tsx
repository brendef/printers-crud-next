  export default ({ amount }:{amount:number}) => {

    const SkeletonText = () => {
      return (
        <div role="status" className={`space-y-2.5 animate-pulse max-w-lg ${amount > 1 ? 'my-5' : 'my-10'} `}>
          <div className="flex items-center w-full space-x-2">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          </div>
          <div className="flex items-center w-full space-x-2 max-w-[480px]">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          </div>
          <div className="flex items-center w-full space-x-2 max-w-[400px]">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          </div>
          <div className="flex items-center w-full space-x-2 max-w-[480px]">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          </div>
          <div className="flex items-center w-full space-x-2 max-w-[440px]">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
          </div>
          <div className="flex items-center w-full space-x-2 max-w-[360px]">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          </div>
        </div>
      )
    }

    return <div>{ [...Array(amount)].map((a, i) => <div className={`${a} flex flex-col justify-center items-center`} key={i}><SkeletonText /></div>) }</div>
    
  }
