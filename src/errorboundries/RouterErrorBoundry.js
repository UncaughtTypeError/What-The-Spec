import React, { Component } from 'react';

const styles = {
    fontWeight: 'normal'
}

class RouterErrorBoundry extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            hasError: false,
            error: null,
        }
    }

    // Lifecycle method : called during render phase
    static getDerivedStateFromError(error) {
        // Use to update state so the next render will show the fallback UI.
        return { 
            hasError: true,
            error: error,
        };
    }

    // Lifecycle method : called during commit phase
    componentDidCatch(error, errorInfo) {
        // Use for sideEffects like logging errors
        console.error(error, errorInfo);
    }

    render() {
        if(this.state.hasError) {
            return (
                <div>
                    <h1 style={{...styles}}>Oops! We've got nothing.</h1>
                    <h3 style={{...styles}}>Error loading route</h3>
                </div>
            )
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