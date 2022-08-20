import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({info,title}) => {
  
  const [showInfo, setShowInfo] = useState(false);

  return <section className='question'>
    <header>
      <h4>{title}</h4>
      <button onClick={()=>setShowInfo(!showInfo)}>{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
    </header>
    {showInfo && <p>{info}</p>}

  </section>;
};

export default Question;
