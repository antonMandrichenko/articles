import React from 'react'
import Layout from './components/Layout'
import { ThemeProvider } from '@material-ui/core'
import { theme } from './utils/theme'
import { ArticlesProvider } from './contexts/ArticlesContext'
import Articles from './components/Articles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ArticlesProvider>
        <Layout>
          <Articles />
        </Layout>
      </ArticlesProvider>
    </ThemeProvider>
  )
}

export default App
