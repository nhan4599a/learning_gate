import '../styles/global.css'

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

export default RootLayout