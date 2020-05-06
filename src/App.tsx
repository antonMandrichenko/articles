import React from 'react'
import Layout from './components/Layout'
import { ThemeProvider } from '@material-ui/core'
import { theme } from './utils/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <div>fgfgfgf</div>
      </Layout>
    </ThemeProvider>
  )
}

export default App
