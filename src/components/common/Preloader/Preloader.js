import React from 'react';
import preloader from './../../../assets/images/preloader.gif';

let Preloader = (props) => {
    return <div ><img src={preloader} style={ {width: '50px'} } /></div>
}

export default Preloader;