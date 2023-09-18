import React, { useState } from 'react';

function UserLogin({onUserLogin}) {
    const [username, setUsername] = useState('');

    const handleChangeMemberName = (e) => {
        const changeMember = e.target.value;
        setUsername(changeMember);
    }

    const handleSubmitMemberName = (e) => {
        e.preventDefault();
        onUserLogin(username.trimEnd().trimStart());
        setUsername('');
    }

    return(
        <div className='login'>
            <h1>Ulaz u CHAT</h1>
            <form className='enterUsername' onSubmit={handleSubmitMemberName}>
                <input onChange={handleChangeMemberName} placeholder='Upišite ime i pritsinute ENTER' value={username} autoFocus={true} />
                {(username !== '') ? (<button type='submit' >Login</button>) : (<button type='submit' disabled >Login</button>)}
            </form>
        </div>
    );
}

export default UserLogin;
