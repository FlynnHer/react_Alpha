import MyProps from './MyProps';
import MyUseState from './hooks/MyUseState'
import FormEvent from './hooks/FormEvent';
function Alpha () {
  return (
    <div>
      <MyProps name="리액트"> 태그 내용 </MyProps>
      <hr/>
      <MyUseState />
      <hr/>
      <FormEvent />
      <hr/>

    </div>
  )
}

export default Alpha;