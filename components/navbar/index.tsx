import { navbar } from 'assets'
import Link from 'next/link'

export default ({
    title = { text: 'Website Name', to: '/', colour: 'text-black' },
    padding = 'px-2 py-4',
    buttonLinks = [],
    backgroundColour = 'bg-white'
}: navbar) => {

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

    const RenderNavLinkButtons = ({navLinkButtons}:any) => {
        return (
            navLinkButtons.length > 0 ? navLinkButtons.map((button:any)=>
            <Link href={button.to}><button className="bg-primary-400 text-md text-white font-bold mx-2 py-2 px-4 rounded"> {button.text} </button></Link>
        ):<></>) 
        

    }

    return (
        <>
            {renderCSS()}

            <nav className={`shadow ${padding} ${useBackground}`}>
                <div className={`flex justify-between`}>
                    <div className='flex items-center'>
                        <a className={`text-xl font-bold ${useTitleColour} lg:text-xl`} href={useTitleLink}>
                            {String(useTitle)}
                        </a>
                    </div>
                    <div><RenderNavLinkButtons navLinkButtons={buttonLinks} /></div>
                </div>
            </nav>

        </>
    )
}
