const ListItem = ()=> {
  const names = [ 'SnowMan', 'Ice', 'Snow', 'Blizard' ];
  const nameList = names.map((name, i)=> <li key={i}>{name}</li>);
  
  return <ul>{nameList}</ul>
}

export default ListItem;