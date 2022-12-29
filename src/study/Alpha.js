import MyProps from './MyProps';
import MyUseState from './hooks/MyUseState'
import FormEvent from './hooks/FormEvent';
import ListItem from './ListItem';
import ListItemHook from './hooks/ListItemHook';

function Alpha () {
  return (
    <div>
      <MyProps name="리액트"> 태그 내용 </MyProps>
      <hr/>
      <MyUseState />
      <hr/>
      <FormEvent />
      <hr/>
      <ListItem />
      <hr/>
      <ListItemHook />
    </div>
  )
}

export default Alpha;