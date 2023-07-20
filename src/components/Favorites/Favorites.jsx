import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';

function Favorites({myFavorites}) {
    return (
        <div>
            <h1>Favorites</h1>
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
                />
                ))}
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return{
        myFavorites: state.myFavorites
    }
}
export default connect(mapStateToProps)(Favorites);