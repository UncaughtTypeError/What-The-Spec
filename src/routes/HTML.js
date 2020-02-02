import React, { Fragment } from 'react';

// Styles
import styles from '../styles/View.module.css';

// Data
import { HTML_spec } from '../utils/spec-data';

const SpecList = () => {
    return (
        HTML_spec.map((status, i) => {
            return (
                <ul key={i} id={`stage-${i}`} className={styles[`stage-${i}`]}>
                    <li>{status.acronym}</li>
                    <li>{status.stage}</li>
                    <li><strong>{status.phase}:</strong> {status.definition}</li>
                    <li>{status.organisation}</li>
                </ul>
            );
        })
    );
}

const HTML = () => {
    return (
        <Fragment>
            <div className={styles.title}>The W3C Recommendation track & WHATWG Living Standards</div>
            <div className={styles.list}>
                <ul className={styles.header}>
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

export default HTML;