import React from 'react';
import useStore from '../utils/store'; 


function Header({userName, member, logout}) {
  const { numMember} = useStore();
    return(
        <div className="App-header">
        {
          (member.id) ?
          <>
          <h1 className='App-title'>Vi ste u chat prijavljeni kao: {userName} <button className='logout' onClick={logout}>Logout</button></h1>
          <h5>broj aktivnih članova: {numMember}</h5>
          </>:
          (<h1 className='App-title'>Chat app</h1>)
        }
      </div>
  );
}

export default Header;