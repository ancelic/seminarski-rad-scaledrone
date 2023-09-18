import React, { useState,useRef } from 'react';
import UserLogin from './UserLogin';
import Header from './Header';
import MessageList from './MessageList';
import SendMessage from './SendMessage';
import randomColor from '../utils/randomColor'; 
import generateRandomRoboUrl from '../utils/randomRoboUrl';


let headerUserName = '';


const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [member, setMember] = useState({ username: '', color: '' });
  const droneRef = useRef(null);
  const randomColorF = randomColor;
  const randomUrl = generateRandomRoboUrl();
  const soba = "observable-soba";
  const channelId = "7UhDBTQiofgepjRR";


  const handleOnUserLogin = (user) => {
    if (user !== '') {
      droneRef.current = new window.Scaledrone(channelId, {
        data: { username: user, color: randomColorF }
      });

      headerUserName = user;
      console.log('User ' + user + ' logged in');

      droneRef.current.on('open', (error) => {
        if (error) {
          return console.error(error);
        }
        const memberData = {
          username: user,
          color: randomColorF,
          id: droneRef.current.clientId,
          randomUrl: randomUrl,
        };
        setMember(memberData);

        console.log('Data succesfully loaded');
      });

      const room = droneRef.current.subscribe(soba);
      console.log('Room subscribed');

      room.on('data', (data, member) => {
        setMessages((prevMessages) => [...prevMessages, { member, text: data }]);

        console.log('Message sent');
      });
    } else {
      console.log('Enter username');
    }
  };

  const handleOnUserLogout = () => {
    setMessages([]);
    setMember({});
    if (droneRef.current) {
      droneRef.current.close();
    }

    console.log('User logged out');
  };

  const onSendMessage = (message) => {
    droneRef.current.publish({
      room: soba,
      message,
    });
  };

  return (
    <div className="App">
      <Header userName={headerUserName} member={member} logout={handleOnUserLogout} />
      {member.id ? (
        <div>
          <MessageList messages={messages} currentMember={member} />
          <SendMessage onSendMessage={onSendMessage} onUserLogout={handleOnUserLogout} />
        </div>
      ) : (
        <div>
          <div className="loginImage" style={{paddingLeft:"40%", paddingBottom:"20%"}}>
            <div className="logo"></div>
          </div>
          <UserLogin onUserLogin={handleOnUserLogin} />
        </div>
      )}
    </div>
  );
};

export default Chat;
