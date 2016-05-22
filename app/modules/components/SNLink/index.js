import React from 'react'
import Avatar from 'material-ui/Avatar'
import ghLogo from './gh_logo'
import liLogo from './li_logo'
import twLogo from './tw_logo'

const style = {
  margin: 5
}

const SNLink = () => (
  <div>
    <a href={'https://www.linkedin.com/in/dcolonv'}><Avatar disable={false} src={liLogo} style={style} size={30} /></a>
    <a href={'https://www.twitter.com/dcolonv'}><Avatar src={twLogo} style={style} size={30} /></a>
    <a href={'https://www.github.com/dcolonv'}><Avatar src={ghLogo} style={style} size={30} /></a>
  </div>
)

export default SNLink
