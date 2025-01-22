import { increment, decrement, $counter } from '../store/counter';
import { useStore } from '@nanostores/react';


export function NanoCounter() {
    console.log('render Counter', Date.now());
    const
        count = useStore($counter);
       
    return <fieldset>
        <legend>Nanostores counter</legend>
        <button onClick={() => decrement()}>-</button>
        {count}
        <button onClick={() => increment()}>+</button>
    </fieldset>

}