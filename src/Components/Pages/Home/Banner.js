import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'

// component++++++++++++++




const Banner = () => {
  // const classes = useStyle();
  // const url =   'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80'
  const url = 'https://drive.google.com/drive/u/0/folders/1kmvCwkeeII2EOabcrpqKxNxLfiI-ckHF'

  return (
    <Box sx={{
      background: `url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'}) center/55% repeat-x #000`,
      width: '100%',
      height: '30vh',
      // marginTop:64,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      '& :first-child': {
        color: '#FFFFFF',
        fontSize: 66,
        lineHeight: 1.2
      },
      '& :last-child': {
        fontSize: 50,
        backgroundColor: '#FFFFFF'
      },
      color: 'white',
      fontSize: 30,
      fontStyle: 'Roboto',
      fontWeight:600,
    }}>

      <img src={url} alt="" />

        The Tax and Legal Experts

    </Box>
  )
}

export default Banner

