import React from 'react';

const PageNotFound = () => {
    const styles = {
        background: 'grey',
        paddingTop: '150px',
        textAlign: 'center',
        color: '#ffffff',
        opacity: '.9',
        height: '100vh'
    };
    const stylesImg = {
        width: '350px',
        textAlign: 'center'
    };

    return (
        <div className="text-center" style={styles} id="wrapper">
            <div id="info">
                <h2>This page could not be found</h2>
            </div>
            <img className="img-fluid" style={stylesImg} src="https://i.imgur.com/qIufhof.png" alt="not-found"/>          
        </div >
    );
}

export default PageNotFound;