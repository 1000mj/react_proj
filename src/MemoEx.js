import React,{useState,useMemo} from "react";

const getAverage = numbers =>{
  console.log("평균값 계산중");
  if(numbers.length ==0) return 0;
  const sum = numbers.reduce((a,b)=>a+b);
  return sum / numbers.length;
}

const MemoEx =()=>{
  const [list,setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = e =>{
    setNumber(e.target.value)
  }

  const onInsert = e => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  }

  const noNo =()=>{
    if (number===''){
      alert('숫자를 입력 하세요.')
      return
    }
  }


  return(
    <>
      <input 
      value={number} 
      onChange={onChange}
      type='number'
      />
      <button onClick={onInsert} type='button' >등록</button>
      <ul>
        {list.map((value,index)=>(
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <h2>평균값 : <p>{getAverage(list)}</p></h2>
      </div>
    </>
  );
};

export default MemoEx;