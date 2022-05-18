import React from 'react';
import { useNavigate } from 'react-router-dom';

//import {Link} from 'react-router-dom';

const Nav = () => {
    //const navigate=useNavigate();
    let navigate = useNavigate();

    const changeRoute = (url) => {
       console.log(url)
       navigate(url);
    }
    return (
        <>
         <h1>Live spaces</h1>
            <div>
            <img className="image1" src="https://img.myloview.com/stickers/flat-tick-mark-check-icon-tick-mark-vector-700-177164582.jpg"></img> All Pics on Cyber either belong to or were minted by their space creator
            </div>
            <button onClick={() => { changeRoute("/trending") }} className="appButton" type="Button">24hr Trending</button>
            <button onClick={() => { changeRoute("/show") }} className="appButton" type="Button">Show the show</button>
            <button onClick={() => { changeRoute("/popular") }} className="appButton" type="Button">Popular things to show</button>
            <button onClick={() => { changeRoute("/genesis") }} className="appButton" type="Button">Genesis show</button>
            <button onClick={() => { changeRoute("/temple") }} className="appButton" type="Button">Temple show</button>
            <button onClick={() => { changeRoute("/vold") }} className="appButton" type="Button">Vold Show</button>
            <button onClick={() => { changeRoute("/bayc") }} className="appButton" type="Button">#BAYC Show</button>
            <br></br>
        </>
          );
        }
        export default Nav;