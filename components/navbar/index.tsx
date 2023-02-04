import React, { useState } from 'react'

export default ({
    title = { text: 'Website Name', to: '/', colour: 'text-black' },
    padding = 'px-2 py-4',
    backgroundColour = 'bg-white'
}: any) => {

    // Scopped CSS
    const renderCSS = () => {
        <style> {`
            .scroll-hidden::-webkit-scrollbar {
                height: 0px;
                background: transparent;
            }
        `} </style>
    }

    const useTitle = title.text ? title.text : title
    const useTitleLink = title.to ? title.to : '/'
    const useTitleColour = title.colour ? title.colour : 'text-black'

    const useBackground = backgroundColour.length === 0 ? 'transparent' : backgroundColour

    return (
        <>
            {renderCSS()}

            <nav className={`shadow ${padding} ${useBackground}`}>
                <div className={`flex justify-between`}>
                    <div className='flex items-center'>
                        <a className={`text-xl font-bold ${useTitleColour} lg:text-xl`} href={useTitleLink}>
                            {useTitle}
                        </a>
                    </div>
                    <button className="bg-primary-400 text-md text-white font-bold py-2 px-4 rounded"> add printer </button>
                </div>
            </nav>

        </>
    )
}