import * as React from 'react';
import HeaderNav from './Header/headerNav';
import EventsHeader from './eventsHeader';
import EventsAllConcerts from './eventsAllConcerts';
import EventsEricChurch from './eventsEricChurch';
import EventsFans from './eventsFans';
import Layout from 'modules/layout/Layout';

const Events = () => {
  return (
    <Layout>
        <HeaderNav />
        <EventsHeader />
        <EventsAllConcerts />
        <EventsEricChurch />
        <EventsFans />
    </Layout>
  );
};

export default Events;
