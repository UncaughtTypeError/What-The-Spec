import React, { Component } from 'react';

class RouterErrorBoundry extends Component {

    constructor(props) {
        super(props);
        this.state = { hasError: false }
    }

    // Lifecycle method : called during render phase
    static getDerivedStateFromError(error) {
        // Use to update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    // Lifecycle method : called during commit phase
    componentDidCatch(error, errorInfo) {
        // Use for sideEffects like logging errors
        console.error(error, errorInfo);
    }

    render() {
        if(this.state.hasError) {
            return <h1>Error</h1>
        }

        return this.props.children;
    };

}

export default RouterErrorBoundry;
    
/*
    1. getDerivedStateFromError (update state) 
    2. render (render fallback UI)
    3. componentDidCatch (sideEffects : logs error)
*/

// see: https://stackoverflow.com/questions/52962851/whats-the-difference-between-getderivedstatefromerror-and-componentdidcatch