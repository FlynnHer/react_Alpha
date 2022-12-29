import { useState } from 'react';

const ListItemHook = ()=> {
  const [ names, setNames ] = useState([
    { id: 1, text: 'SnowMan', },
    { id: 2, text: 'Ice', },
    { id: 3, text: 'Snow', },
    { id: 4, text: 'Blizard' },
  ]);
  const [ inputText, setInputText ] = useState('');
  const [ nextId, setNextId ] = useState(5);
  const nameList = names.map(name=> <li key={name.id}> {name.text} </li>);

  const onChange = e=> setInputText(e.target.value);
  const onClick = ()=> {
    if(inputText===''){
      alert("Insert Text");
      return;
    }
    const nextList = names.concat({
      id: nextId,
      text: inputText
    });
    setNextId(nextId +1);
    setNames(nextList);
    setInputText('')
  }
  
  return (
    <div>
      <ul>{nameList}</ul>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>Add</button>
    </div>
  )
}

export default ListItemHook;