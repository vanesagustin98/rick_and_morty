import SearchBar from "../SearchBar/SearchBar";
import {NavLink } from "react-router-dom";

export default function Nav(props){
    return(
        <div>
            <NavLink to={'/home'}>
                <button>Home</button>
            </NavLink>
            <NavLink to={'/about'}>
                <button>About</button>
            </NavLink>
            <NavLink to={'/favorites'}>
                <button>Favorites</button>
            </NavLink>
            <SearchBar onSearch={props.onSearch}/>
            <button onClick={props.logOut}>Log Out</button>
        </div>
    )
}