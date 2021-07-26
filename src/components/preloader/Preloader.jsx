import React from 'react'
import q from './Preloader.module.css'


let Preloader = () => {

    return (
        <div className={q.preloader}>
            <div className={q.spinner}></div>
        </div>
    );
}

export default Preloader;