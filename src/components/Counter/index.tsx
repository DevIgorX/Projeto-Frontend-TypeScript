import { useState } from 'react'
import './styles.css'
type Props = {
   title: string, 
   initialValue?: number
}

function Counter ({title, initialValue}: Props) {
    const [count, setCount] = useState(0 || initialValue)
    return (
        <div className='container-counter'>
            <h1>Counter</h1>
            <h2>Contagem atual:{count}</h2>
            <button onClick={()=> setCount(count + 1)}>
                Incrementar

            </button>
        </div>
    )
}


export default Counter