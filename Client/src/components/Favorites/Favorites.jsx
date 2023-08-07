import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import { filterCards, orderCards } from '../../redux/actions';

function Favorites({ myFavorites }) {
    console.log(myFavorites);
    const [aux, setAux] = useState(false)
    const dispatch = useDispatch()
    function handleOrder(event) {
        dispatch(orderCards(event.target.value))
        setAux(true)
    }
    function handleFilter(event) {
        dispatch(filterCards(event.target.value))
    }
    return (
        <div>
            <h1>Favorites</h1>
            <select onChange={handleOrder} defaultValue="">
                <option disabled value="">Order</option>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select onChange={handleFilter} defaultValue="">
                <option disabled value="">Filter Gender</option>
                <option value="all">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>
            <div>
                {myFavorites.map((personaje) => (
                    <Card
                        key={personaje.id}
                        id={personaje.id}
                        name={personaje.name}
                        status={personaje.status}
                        species={personaje.species}
                        gender={personaje.gender}
                        origin={personaje.origin}
                        image={personaje.image}
                        showCloseButton={false}
                    />
                ))}
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites
    }
}
export default connect(mapStateToProps)(Favorites);