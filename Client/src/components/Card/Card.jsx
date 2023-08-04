import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import { addFav, removeFav } from '../../redux/actions';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

function Card(props) {
   const { id, name, status, species, gender, origin, image, onClose, myFavorites,showCloseButton } = props;
   const [isFav, setIsFav] = useState(false)
   
   function handleFavorite() {
      if (isFav === true) {
         setIsFav(false)
         props.removeFav(id)
      }
      if (isFav === false) {
         setIsFav(true)
         props.addFav({
            id,
            name,
            status,
            species,
            gender,
            origin,
            image
         })
      }
   }

   useEffect(() => {
      (myFavorites||[]).forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites,id]);

   return (
      <div className={styles.divCard}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         {showCloseButton && <button className={styles.buttonCard} onClick={()=>onClose(id)}>X</button>}
         <Link to={`/detail/${id}`}>
            <h2 className={styles.h2Card}>Name: {name}</h2>
         </Link>
         <h2 className={styles.h2Card}>Id: {id}</h2>
         <h2 className={styles.h2Card}>Status: {status}</h2>
         <h2 className={styles.h2Card}>Specie {species}</h2>
         <h2 className={styles.h2Card}>Gender: {gender}</h2>
         <h2 className={styles.h2Card}>Origin: {origin.name}</h2>
         <img className={styles.imgCard} src={image} alt={name} />
      </div>
   );
}
function mapDispatchToProps(dispatch) {
   return{
      addFav: (character) =>{
         dispatch(addFav(character))
      },
      removeFav: (id) =>{
         dispatch(removeFav(id))
      }
   }
}
function mapStateToProps(state) {
   return{
      myFavorites: state.myFavorites
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);

