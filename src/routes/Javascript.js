import React, { Fragment } from 'react';

// Styles
import styles from '../styles/View.module.css';

// Data
import { JS_spec } from '../utils/spec-data';

const SpecList = () => {
    return (
        JS_spec.map((status, i) => {
            return (
                <ul key={i} id={`stage-${i}`} className={styles[`stage-${i}`]}>
                    <li>{i+1}</li>
                    <li>{status.stage}</li>
                    <li>{status.definition}</li>
                    <li>{status.organisation}</li>
                </ul>
            );
        })
    );
}

const Sources = () => {
    let props = {
        target: '_blank',
        rel: 'noopener noreferrer'
    };

    return (
        <ul className={styles.sources}>
            <li><a href="https://tc39.es/process-document/" {...props} title="The TC39 Process">The TC39 Process</a></li>
        </ul>
    );
}

const Javascript = () => {
    return (
        <Fragment>
            <div className={styles.title}>ECMAScript Proposal Stages</div>
            <div className={styles.list}>
                <ul className={styles.header}>
                    <li></li>
                    <li>Stage</li>
                    <li>Definition</li>
                    <li>Org.</li>
                </ul>
                <SpecList/>
            </div>
            <Sources/>
        </Fragment>
    );
};

export default Javascript;