import { addFav, removeFav } from '../../redux/actions';
import Card from '../Card/Card';
import styles from './Cards.module.css';

export default function Cards(props) {
   const { characters, onClose} = props;
   return (
      <div className={styles.divCards}>
         {characters.map((personaje) => (
            <Card
               showCloseButton={true}
               key={personaje.id}
               id={personaje.id}
               name={personaje.name}
               status={personaje.status}
               species={personaje.species}
               gender={personaje.gender}
               origin={personaje.origin}
               image={personaje.image}
               onClose={onClose}
               addFav = {addFav}
               removeFav={removeFav}
               
            />
         ))}
      </div>
   );
}
