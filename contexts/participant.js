import React, { useState } from 'react';

const ParticipantContext = React.createContext([{}, () => {}]);
const Countries = [];
const ParticipantProvider = (props) => {
  const [participant, setParticipant] = useState(Countries);
  
  return (
    <ParticipantContext.Provider value={[participant, setParticipant]}>
      {props.children}
    </ParticipantContext.Provider>
  );
};

export {ParticipantContext, ParticipantProvider};