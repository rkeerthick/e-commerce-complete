import React from 'react'
import Logo from '../../assets/commerce.png'
import { FlashImage, FlashStyled } from './Styled'
import { LinearProgress } from '@mui/material'

const Flash = () => {
    return (
        <FlashStyled>
            <FlashImage src={Logo} alt="flash" />
            <LinearProgress style={{position: "relative", top: '200px'}} />
      </FlashStyled>
  )
}

export default Flash