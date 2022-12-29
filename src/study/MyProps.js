const MyProps = props => {
  return (
    <div>
      <h1>Hellow</h1>
      props.name is {props.name||"무 명"}.<br/>
      children is {props.children}
    </div>
  )
}

export default MyProps;