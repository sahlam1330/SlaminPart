import React, { useState, useEffect } from "react";
import  bigsale from './bigsale.jpeg'
 

function Home() {


        return (
            <div className="home">
                
                <h1>Call To Order: 1-800-541-BEST</h1>
                <h1>Search from over 10 Million Auto Parts</h1>

                <br></br>
                <br></br>
                <br></br>
                <img alt="big sale" src={bigsale} />
                <p>Hurry up and get this deal before time runs out!! Deal ends 03/25/2024 </p> 


                
            </div>
        );
    }
export default Home;