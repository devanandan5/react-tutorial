import React,{useState} from 'react'
import styled from "styled-components"
function Counter() {
       const [count,setcount] = useState(0)
       const increament = ()=>{
              setcount(count+1)
       }
       const decrement = ()=>{
              setcount(count-1)
       }
  return (
    <div>
       <Header>Counter</Header>
       <Counters className="Counter">{count}</Counters>
       <Button className='btn btn-danger' onClick={decrement}>-</Button>
       <Button className='btn btn-success' onClick={()=>{
              setcount(0);
       }}>Reset</Button>
       <Button className='btn btn-primary' onClick={increament}>+</Button>
    </div>
  )
}
const Header = styled.h1`
       font-weight: bolder;
       font-family: 'Courier New', Courier, monospace;
       margin-left: 15px;
`
const Counters = styled.div`
       font-weight: bold;
       font-size: 4rem;
       margin-left: 6rem;
`
const Button = styled.button`
       margin-left: 15px;
       margin-right: 15px;
`
export default Counter