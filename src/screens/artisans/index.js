import React, { useEffect } from 'react';
import { Artisan } from './Artisan';
import "./index.css";


export const Artisans =  ({ getAllArtisans, artisans }) => {
    // useEffect(() => {
    //     getAllArtisans({
    //         page: 1,
    //         limit: 6,
    //         details_length: 150
    //     });
    // }, []);
    
    return (
        <div className="Artisan__container">
         <Artisan />    
         <Artisan />    
         <Artisan />    
         <Artisan />    
        </div>
    )
}

export default Artisans;
