import React from 'react';
import Collections from './Collections';
import Note from './Note';
import Notes from './Notes';

function App() {
  return (
    <div className="p-4 flex">
      <div className="p-2">
        <Collections />
      </div>
      <div className="p-2">
        <Notes />
      </div>
      <div className="p-2">
        <Note />
      </div>
    </div>
  );
}

export default App;
