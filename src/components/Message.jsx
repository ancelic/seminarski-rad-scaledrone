function Message({message, member}) {

    return(
            (message.member.id === member.id) ?
            (        
            <li className='messages-message currentMember'>
                <div className='message-content'>
                <div id="jedan" style={{display: "flex", flexWrap: "inherit"}}>
                <img
                    src={member.randomUrl}
                    alt="Avatar"
                    className="avatar"
                  />
                    <h4 className='username'>{message.member.clientData.username + ":"}</h4>
                    </div> 
                    <h2 className='text' style={{backgroundColor: message.member.clientData.color}}>{message.text}</h2>
                </div>
            </li>
            ) :
            (        
            <li className='messages-message'>
                <div className='message-content'>
                <div id="jedan" style={{display: "flex", flexWrap: "inherit"}}>
                   <img
                      src={member.randomUrl+1}
                      alt="Avatar"
                      className="avatar"
                    />
                    <h4 className='username'>{message.member.clientData.username + ":"}</h4>
                    </div>
                    <h2 className='text' style={{backgroundColor: message.member.clientData.color}}>{message.text}</h2>
                </div>
            </li>
            )
    );
}

export default Message;