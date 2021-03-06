import React from 'react';
import Header from './Header';
import TicketList from './TicketList';

function App() {
  return (
    <React.Fragment>
      <Header />
      <TicketList />
      {/* This is a JSK comment. */}
    </React.Fragment>
  );
}

export default App;