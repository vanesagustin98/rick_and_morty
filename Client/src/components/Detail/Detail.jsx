import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Detail() {
    const {id} = useParams()
    const [character, setCharacter] = useState({})
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                alert('No hay personajes con ese ID');
            }
            });
        return setCharacter({});
    }, [id]);
    const { name, status, species, gender, origin, image } = character;
    return(
        <>{
            character?(
                <div>
                    <h3>{name}</h3>
                    <h3>{status}</h3>
                    <h3>{species}</h3>
                    <h3>{gender}</h3>
                    <h3>{origin?.name}</h3>
                    <img src={image} alt={name}></img>
                </div>
            ): ""
        }
    </>
        
    )
}