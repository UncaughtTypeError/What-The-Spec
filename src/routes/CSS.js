import React, { Fragment } from 'react';

// Data
import { CSS_spec } from '../utils/spec-data';

const SpecList = () => {
    return (
        CSS_spec.map((status, i) => {
            return (
                <ul key={i} id={`stage-${i}`}>
                    <li>{status.acronym}</li>
                    <li>{status.stage}</li>
                    <li><strong>{status.phase}:</strong> {status.definition}</li>
                    <li>{status.organisation}</li>
                </ul>
            );
        })
    );
}

const CSS = () => {
    return (
        <Fragment>
            <div className='viewContent__title'>The W3C Recommendation track</div>
            <div className='specList specList__CSS'>
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

export default CSS;