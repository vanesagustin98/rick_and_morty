import styles from './SearchBar.module.css'
import React, {useState} from 'react';
export default function SearchBar(props) {
   const [id, setId] = useState('')
   function handleChange(event) {
      setId(event.target.value);
   }
   const random = Math.floor(Math.random()*826) + 1;
   return (
      <div className={styles.divBar}>
         <input className={styles.inputBar} type='search' onChange={handleChange}/>
         <button className={styles.buttonBar} onClick={()=>props.onSearch(id)}>Agregar</button>
         <button className={styles.buttonBar} onClick={()=>props.onSearch(random)}>Random</button>
      </div>
   );
}