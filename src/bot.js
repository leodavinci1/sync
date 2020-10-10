import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import discord from 'discord.js';



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));




export default function Album() {
  const classes = useStyles();
  const bott = new discord.Client();
  const [bottObj, setBott] = useState(bott)
  const [logged, setLogged] = useState(false);
  const tak = window.atob("TnpZeE5ESTBNekV3TnpBek1qSTJPVE13LlgzYVpwZy5GWmZIcWhpeFdoV0JKbUI0Q3dCa1RESU14U3c=");
  const channel_id = window.location.hash?.split("#")[1];
  const [id, setId] = useState(channel_id);
  
  const mute = (bot, channel_id) => {
    const general = bottObj.channels.cache.find(channel => channel.id === id);
    general.send(",m")
  }

  const unMute = (bot, channel_id) => {
    const general = bottObj.channels.cache.find(channel => channel.id === id);
    general.send(",u");
  }
  
  useEffect(() => {
    bottObj.login(tak);

    bottObj.on("ready", (e) => {
      setLogged(true)
      document.onkeypress = function (e) {
        e = e || window.event;
        // use e.keyCode
        const code = e.keyCode
        if(code === 32){
          mute(bott, channel_id);
        } else if (code === 13) {
          unMute(bott, channel_id);
        }
    
      };
    })
  },[]);
  
  
  

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar style={{display: "flex", justifyContent: "space-between"}}>
          <Typography variant="h6" color="inherit" noWrap>
            v1.0
          </Typography>
          <Typography variant="h6" color="inherit" noWrap>
            sync
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div style={{ height: "calc(100vh - 56px)" }} className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
              Crewmate Helper
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              You can also hit space bar to mute and enter to unmute.
            </Typography>
            <div className={classes.heroButtons}>
            <Grid style={{ marginTop: "270px" }} container spacing={2} justify="center">
                  {!!logged && !!channel_id ?
                  <Grid item> <span className="dot green"></span> Connected to <b>Voice channel</b></Grid>
                : <Grid item> <span className="dot red"></span> Not connected</Grid>
                }
                
                
              </Grid>
              <Grid container spacing={2} justify="center">
                
                <Grid item>
                  <Button variant="contained" color="primary" onClick={() => mute(bott, channel_id)}>
                    MUTE
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" onClick={() => unMute(bott, channel_id)}>
                    UNMUTE
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}