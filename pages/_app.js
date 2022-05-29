import '../styles/globals.css'
import GlobalProvider from './context/GlobalContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </GlobalProvider>
    </>
  )
}

export default MyApp
