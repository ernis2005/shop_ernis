


import '../styles/globals.scss'
import Navigation from './Navigation/Navigation'


function MyApp({ Component, pageProps }) {
  return (
    <Navigation>
      
<Component {...pageProps} />

    </Navigation>

  

  
  )
   
  
}

export default MyApp
