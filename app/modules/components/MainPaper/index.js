import React, { PropTypes } from 'react'
import Paper from 'material-ui/Paper'

const style = {
  height: 'auto',
  width: '80%',
  top: -100,
  marginLeft: '8%',
  textAlign: 'center',
  position: 'relative',
  zIndex: 10
}

const MainPaper = ({children}) => (
  <Paper style={style} zDepth={3}>
    {children}
  </Paper>
)

MainPaper.propTypes = {
  children: PropTypes.array
}

export default MainPaper
