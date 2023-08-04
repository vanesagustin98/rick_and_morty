import styles from './SearchBar.module.css'
import React, {useState} from 'react';
export default function SearchBar(props) {
   const [id, setId] = useState('')
   function handleChange(event) {
      setId(event.target.value);
   }
   const [random, setRandom] = useState(Math.floor(Math.random()*826) + 1)
   function handleRandom() {
      setRandom(Math.floor(Math.random()*826) + 1)
      props.onSearch(random)
   }
   return (
      <div className={styles.divBar}>
         <input className={styles.inputBar} type='search' onChange={handleChange}/>
         <button className={styles.buttonBar} onClick={()=>props.onSearch(id)}>Agregar</button>
         <button className={styles.buttonBar} onClick={()=>handleRandom()}>Random</button>
      </div>
   );
}