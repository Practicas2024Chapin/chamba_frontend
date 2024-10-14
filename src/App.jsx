import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Routes from './routes/Routes'
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
      <Routes />
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  )
}

export default App
