import React, { Fragment } from 'react';

// Styles
import styles from '../styles/View.module.css';

// Data
import { CSS_spec } from '../utils/spec-data';

const SpecList = () => {
    return (
        CSS_spec.map((status, i) => {
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

const CSS = () => {
    return (
        <Fragment>
            <div className={styles.title}>The W3C Recommendation track</div>
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

export default CSS;