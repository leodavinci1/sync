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
  const _0x3f3d=['split','cache','Client','NzYxNDI0MzEwNzAzMjI2OTMw.X3aZpg.6wMjzHPUBXdSXVvaPTzh3R4M_lI','find','channels','hash','send'];(function(_0x4256f7,_0x3f3de5){const _0x86539=function(_0x13102c){while(--_0x13102c){_0x4256f7['push'](_0x4256f7['shift']());}};_0x86539(++_0x3f3de5);}(_0x3f3d,0x10d));const _0x8653=function(_0x4256f7,_0x3f3de5){_0x4256f7=_0x4256f7-0x0;let _0x86539=_0x3f3d[_0x4256f7];return _0x86539;};const _0x2e2b6d=_0x8653,classes=useStyles(),bott=new discord[(_0x2e2b6d('0x5'))](),[bottObj,setBott]=useState(bott),[logged,setLogged]=useState(![]),token=_0x2e2b6d('0x6'),channel_id=window['location'][_0x2e2b6d('0x1')]?.[_0x2e2b6d('0x3')]('#')[0x1]?.['split']('%')[0x0],[id,setId]=useState(channel_id),mute=(_0x13102c,_0x37888b)=>{const _0x3ad772=_0x2e2b6d,_0x20b495=bottObj[_0x3ad772('0x0')][_0x3ad772('0x4')][_0x3ad772('0x7')](_0x4383d5=>_0x4383d5['id']===id);_0x20b495[_0x3ad772('0x2')](',m');},unMute=(_0x2a6c02,_0x3e1eae)=>{const _0x4f6b64=_0x2e2b6d,_0x4fa1ed=bottObj[_0x4f6b64('0x0')]['cache'][_0x4f6b64('0x7')](_0xc7875e=>_0xc7875e['id']===id);_0x4fa1ed[_0x4f6b64('0x2')](',u');};

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