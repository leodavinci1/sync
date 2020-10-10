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
  const _0x2d3c=['find','TnpZeE5ESTBNekV3TnpBek1qSTJPVE13LlgzYVpwZy5GWmZIcWhpeFdoV0JKbUI0Q3dCa1RESU14U3c=','split','cache','channels','location','atob','send','Client'];(function(_0x3ccb76,_0x2d3cb6){const _0x5069b0=function(_0x5f5df1){while(--_0x5f5df1){_0x3ccb76['push'](_0x3ccb76['shift']());}};_0x5069b0(++_0x2d3cb6);}(_0x2d3c,0xa7));const _0x5069=function(_0x3ccb76,_0x2d3cb6){_0x3ccb76=_0x3ccb76-0x0;let _0x5069b0=_0x2d3c[_0x3ccb76];return _0x5069b0;};const _0x589fcb=_0x5069,classes=useStyles(),bott=new discord[(_0x589fcb('0x3'))](),[bottObj,setBott]=useState(bott),[logged,setLogged]=useState(![]),token=window[_0x589fcb('0x1')](_0x589fcb('0x5')),channel_id=window[_0x589fcb('0x0')]['hash']?.[_0x589fcb('0x6')]('#')[0x1]?.[_0x589fcb('0x6')]('%')[0x0],[id,setId]=useState(channel_id),mute=(_0x5f5df1,_0x1c4854)=>{const _0x5d7eec=_0x589fcb,_0x344e08=bottObj[_0x5d7eec('0x8')][_0x5d7eec('0x7')][_0x5d7eec('0x4')](_0x4ae1c4=>_0x4ae1c4['id']===id);_0x344e08[_0x5d7eec('0x2')](',m');},unMute=(_0x349749,_0x34f3b0)=>{const _0x38d673=_0x589fcb,_0x539183=bottObj['channels'][_0x38d673('0x7')][_0x38d673('0x4')](_0x11b10c=>_0x11b10c['id']===id);_0x539183[_0x38d673('0x2')](',u');};
  useEffect(() => {
    bottObj.login(token);

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