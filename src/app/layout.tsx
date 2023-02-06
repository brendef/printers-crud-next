import Navbar from 'components/navbar'
import './globals.css'

export default ({
  children,
}: {
  children: React.ReactNode
}) => {

  const RenderNavbar = () => {
    const title = {
      text: 'printers',
      colour: 'text-white'
    }

    const padding = 'py-4 px-5'

    const backgroundColour = 'bg-primary-500'

    const buttonsLinks = [
      // {text: "\u{21BB}" , to:'/'},
      // {text: "refresh" , to:'/'},
      {text:'add printer', to:'/new'}
    ]

    return <Navbar title={title} buttonLinks={buttonsLinks} padding={padding} backgroundColour={backgroundColour} />
  }

  return (
    <html lang="en">
      <head />
      <body>
        <RenderNavbar />
        {children}
      </body>
    </html>
  )
}
