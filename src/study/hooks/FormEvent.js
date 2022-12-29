import { useState } from "react";

const FormEvent = ()=> {
  const [ form, setForm ] = useState({
    id: '',
    pass: ''
  });
  const { id, pass } = form;

  //-- Actions ---------------------------
  // Form 의 값을 객체로 묶어서 처리하는 조금은 특이한 형태
  const onChange = (e)=> {
    const nextForm = {
      ...form,                        // 기존 내용 읽어오기
      [e.target.name]: e.target.value // 변경값 덮어쓰기
    };
    console.log(e.target.name)
    setForm(nextForm);
  }
  const onKeyPress = (e)=> {
    console.log(e.key);
    if(e.key==='Enter') {
      onClick();
    }
  };
  const onClick = ()=> {
    if(id==='' || pass==='') {
      alert("글자를 입력해 주세요");
      return;
    }
    alert(id +" : " +pass);
    setForm({id:'', pass:''});
  }

  //-- return Body ------------------------
  return (
    <div>
      <h1> Form Event 연습 </h1>
      ID : 
      <input type="text" name="id" placeholder="사용자 ID" value={id} onChange={onChange} />
      <br />
      Pass :
      <input type="text" name="pass" placeholder="암호" value={pass} onChange={onChange} onKeyDown={onKeyPress} />
      <br />
      <button onClick={onClick}>Check</button>
    </div>
  )
}

export default FormEvent;