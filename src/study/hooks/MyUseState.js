import { useState } from 'react';

const MyUseState = ()=> {
  const [ message, setMessage ] = useState("waiting ...");
  const [ color, setColor ] = useState("gray");

  const onClickEnter = ()=> setMessage("어서오세요");
  const onClickLeave = ()=> setMessage("안녕히 가세요");

  return (
    <div>
      <h1 style={{color}}> {message} </h1>
      <button onClick={onClickEnter}> Enter</button>
      <button onClick={onClickLeave}> Leave</button>
      <br/>
      <button style={{color:'red'}} onClick={()=>setColor('red')}>Red</button>
      <button style={{color:'blue'}} onClick={()=>setColor('blue')}>Blue</button>
      <button style={{color:'green'}} onClick={()=>setColor('green')}>Green</button>
    </div>
  )
}

export default MyUseState;