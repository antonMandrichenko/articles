import React, { FunctionComponent } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { useTheme } from '@material-ui/core'

const Layout: FunctionComponent = ({ children }) => {
  const theme = useTheme()

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography
          component="div"
          style={{ backgroundColor: theme.palette.primary.main, height: '100vh', padding: '1rem' }}
        >
          {children}
        </Typography>
      </Container>
    </React.Fragment>
  )
}

export default Layout
