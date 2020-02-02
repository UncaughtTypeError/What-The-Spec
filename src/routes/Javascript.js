import React, { Fragment } from 'react';

// Data
import { JS_spec } from '../utils/spec-data';

const SpecList = () => {
    return (
        JS_spec.map((status, i) => {
            return (
                <ul key={i} id={`stage-${i}`}>
                    <li>{i+1}</li>
                    <li>{status.stage}</li>
                    <li>{status.definition}</li>
                    <li>{status.organisation}</li>
                </ul>
            );
        })
    );
}

const Javascript = () => {
    return (
        <Fragment>
            <div className='viewContent__title'>ECMAScript Proposal Stages</div>
            <div className='specList specList__JS'>
                <ul className='specList__header'>
                    <li></li>
                    <li>Stage</li>
                    <li>Definition</li>
                    <li>Org.</li>
                </ul>
                <SpecList/>
            </div>
        </Fragment>
    );
};

export default Javascript;