import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { DropdownButton } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import Container from 'react-bootstrap/Container'
import './Help.css'
import { Button } from 'react-bootstrap'
import { conversionList, units } from './database'
const convert = (from, number, to) => {
const fromObj = conversionList.filter(c => c.unit === from);
  console.log(fromObj)
 const toObj = fromObj[0].conversionRatios.filter(c => c.unit === to);
  const result = number * toObj[0].value;
  return result;
}
function App() {
  const [num, setnum] = useState()
  const handlechange = (e) => {
    setnum(e.target.value)
  }
  const [value, setValue] = useState('anna');
  const handleSelect = (e) => {
    console.log(e);
    setValue(e)
  }
  const [nextvalue, setnextValue] = useState('ropani');
  const handleSelectnext = (e) => {
    console.log(e);
    setnextValue(e)
  }
  const [finalvalue, setfinalvalue] = useState(0)
  const handleclick = () => {
     setfinalvalue(convert(value, num, nextvalue));
    console.log(finalvalue)
        }
  const Reset = () => {
    setValue('')
    setnextValue('')
    setfinalvalue('')
    setnum('')
  }
  return (
    <div className="first">
      <h1 className="heading">Land calculator</h1>
      <input type="number" name="num" value={num} placeholder="enter number" onChange={handlechange} className="bg-light" />

      <DropdownButton
        alignright="true"
        title={value}
        id="dropdown-menu-align-right"
        onSelect={handleSelect}>
        {units.map(unit => <Dropdown.Item eventKey={unit}>{unit}</Dropdown.Item>)}
      </DropdownButton>
      <div ><p>convert into</p></div>
      <DropdownButton
        alignright="true"
        title={nextvalue}
        id="dropdown-menu-align-right"
        onSelect={handleSelectnext}
      >
        {units.map(unit => <Dropdown.Item eventKey={unit}>{unit}</Dropdown.Item>)}
      </DropdownButton>
      <Button onClick={handleclick}>convert</Button>
      <Container className="border">
        {finalvalue}
        <p>{nextvalue}</p>
      </Container>
      <Button onClick={Reset}>reset</Button>

    </div>
  )
}
export default App
