import MyProps from './MyProps';
import MyUseState from './hooks/MyUseState'
import FormEvent from './hooks/FormEvent';
import ListItem from './hooks/ListItem';

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

    </div>
  )
}

export default Alpha;