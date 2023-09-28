import '@styles/globals.css';

export const metadata = {
    title: 'Promptopia',
    description: 'Discover and share AI prompts'
}

const RootLayout = ({children}) => {
  return (
    <html>
        <body>
            <div className="main">
                <div className="gradient"></div>
            </div>
            <main>
                <div className="app">{children}</div>
            </main>
        </body>
    </html>
  )
}

export default RootLayout