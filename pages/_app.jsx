import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../lib/createEmotionCache';
import muiTheme from '../lib/muiTheme';
import {ParticipantProvider} from '../contexts/participant'
import 'bootstrap/dist/css/bootstrap.css'
// import '../styles/footer.css';
// import '../styles/globals.css';
// import '../styles/hompageBody.css';
// import '../styles/navbar.css';
// import '../styles/navbar1.css';
// import '../styles/events/events.css';


function App(props) {
  const { Component, pageProps, emotionCache = createEmotionCache() } = props;

  return (
    <ParticipantProvider>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"></link>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
          <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'/>
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.11.2/css/bootstrap-select.min.css'/>
          <title>
            Boilerplate App
          </title>
          <meta
            name="description"
            content="Magic: The Gathering Cards, Yu-Gi-Oh! Cards, Pokémon Cards And More."
          />
        </Head>
        <ThemeProvider theme={muiTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </ParticipantProvider>
  );
}

export default App;
