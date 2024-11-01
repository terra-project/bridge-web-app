import { ReactElement, useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import UnderMaintenance from './UnderMaintenance'

import useApp from './useApp'

const queryClient = new QueryClient()

const App = (): ReactElement => {
  const [initComplete, setInitComplete] = useState(false)

  const { initApp } = useApp()
  useEffect(() => {
    initApp().then(() => {
      setInitComplete(true)
    })
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {initComplete && (
          <>
            <UnderMaintenance />
          </>
        )}
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
