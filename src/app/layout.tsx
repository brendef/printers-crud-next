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

    const navLinks = [
      { text: 'about', to: '/about' },
      { text: 'contact', to: '/contact' }
    ]

    const padding = 'py-4 px-5'

    const backgroundColour = 'bg-primary-500'

    return <Navbar title={title} navLinks={navLinks} padding={padding} backgroundColour={backgroundColour} />
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
