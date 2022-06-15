import * as React from 'react';
import { useState } from 'react';
import { Toolbar, AppBar, Tabs, Tab, Button } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { ThemeProvider} from '@mui/material/styles';
import theme from "../Ui/Theme";
import logo from "../Image/logo.svg";
import { Link } from 'react-router-dom';


function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,

  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
// const meme = createTheme();
// const useStyles = makeStyles(({




// }))

// const useStyles = makeStyles({

// tabContainer:{
//   marginLeft: 'auto',
//   color:'red'
// },
// logo:{
//   height:'700em'
// },
// root:{
// color:  "yellow"

// }
// })









export default function Appbar(props) {


  // const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value)
  }



  return (
    <>


      <ElevationScroll>
        <ThemeProvider theme={theme} >
          <AppBar position='fixed'>
            <Toolbar disableGutters
            >
            
            
              <img
                sx={{
                  height: '7em',

                }}
                //  className = {classes.logo} 
                
                src={logo} alt='company logo'
               

                  
              
              />


              <Tabs
                //  className={classes.tabContainer} 
                sx={{
                  marginLeft: 'auto',
                }}
                value={value}
                onChange={handleChange}
              indicatorColor='primary'
              textColor='secondary'
              >
                <Tab sx={{

                  color: 'white',
                  fontWeight: 'medium',
                  fontSize: '1.35rem',
                  fontFamily: 'raleway',
                  marginLeft: "25px",
                  minWidth: 10
                }}
                  component={Link}
                      to="/"
                  label='HOME'
                />


                <Tab sx={{

                  color: 'white',
                  fontWeight: 'medium',
                  fontSize: '1.35rem',
                  fontFamily: 'raleway',
                  marginLeft: "25px",
                  minWidth: 10
                }} 
                
                component={Link}
                      to="/acts"
                label='ACT' />
               
               
                <Tab sx={{

                  color: 'white',
                  fontWeight: 'medium',
                  fontSize: '1.35rem',
                  fontFamily: 'raleway',
                  marginLeft: "25px",
                  minWidth: 10

                }}
                component={Link}
                      to="/caselaws"
                  label='CASE LAWS' />

                <Tab
                  // className={classes.root}
                  sx={{

                    color: 'white',
                    fontWeight: 'medium',
                    fontSize: '1.35rem',
                    fontFamily: 'raleway',
                    marginLeft: "25px",
                    minWidth: 10
                  }}

                  label='CONTACT US'
                />

              </Tabs>

              {/* <Button
                variant='contained' color='secondary'
                sx={{

                  color: 'black',
                  fontWeight: 'medium',
                  fontSize: '1rem',
                  fontFamily: 'Pacifico',
                  marginLeft: "50px",
                  marginRight: '25px',
                  minWidth: 5,
                  //  backgroundColor: 'white',
                  padding: '0 5 0 5',
                  //  margin: '0 0 0 0',
                  borderRadius: '50%'
                }}>

                LOGIN

              </Button> */}

            </Toolbar>





          </AppBar>


          {/* <div className={classes.tabContainer} /> */}
        </ThemeProvider>
      </ElevationScroll>


    </>
  );
}
