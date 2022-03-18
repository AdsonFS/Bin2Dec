import { useState } from 'react';
import './styles.css'


export default function InputElement() {
  const [valueInput, setValueInput] = useState(0);
  const [valueCalc, setValueCalc] = useState(0);



  function handleValueInput(e) {
    let valueBinary = (e.target.value ? e.target.value : '0').replace(/([^[0-1]]*)/g, '');
    console.log(valueBinary)
    function calcDecimal() {
      let decimalValue = 0;
      for(let i = 0; i < valueBinary.length; i++)
        decimalValue = decimalValue * 2 + (valueBinary[i] - '0');
      return decimalValue;
    }
    setValueInput(valueBinary);
    setValueCalc(calcDecimal());
  }

  return (
    <div className="input-element">
      <input type="text" className='calc' value={valueCalc} maxLength={8} disabled={true} />
      <input type="text" placeholder='Type a binary number' value={valueInput} onChange={handleValueInput} maxLength={16}/>
    </div>
  );
};

