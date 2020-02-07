import React from 'react';

const styles = {
    fontWeight: 'normal'
}

const NoMatch = () => (
    
    <div>
        <h1 style={{...styles}}>Oops! We've got nothing.</h1>
        <h3 style={{...styles}}>Error loading route</h3>
    </div>

);

export default NoMatch;