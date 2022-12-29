import MyProps from './MyProps';
import MyUseState from './hooks/MyUseState'
function Alpha () {
  return (
    <div>
      <MyProps name="리액트"> 태그 내용 </MyProps>
      <MyUseState/>

    </div>
  )
}

export default Alpha;