import '../styles/globals.css'
import GlobalProvider from './context/GlobalContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserProvider from './context/UserContext';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalProvider>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
        <ToastContainer />
      </GlobalProvider>
    </>
  )
}

export default MyApp
