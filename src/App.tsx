import React from 'react'
import Layout from './components/Layout'
import { ThemeProvider } from '@material-ui/core'
import { theme } from './utils/theme'
import { useArticles } from './hooks/useArticles'

function App() {
  const { response, error } = useArticles(process.env.REACT_APP_API_URL!)
  if (error) {
    return <div>{error}</div>
  }
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <div>{JSON.stringify(response)}</div>
      </Layout>
    </ThemeProvider>
  )
}

export default App
