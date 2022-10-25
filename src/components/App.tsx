import React from 'react';

// import Reacticon from '../../assets/images/react.png';
import styles from './App.module.scss';

export const App = () => {
    return (
        <>
            <h1 className={styles.header}>Hello React</h1>
            <img src='asset/images/react.png' />
        </>
    )
}