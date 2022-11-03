import { useState } from 'react';

import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

import styles from './AppLayout.module.scss';

export const AppLayout = () => {
    const [searchString, setSearchString] = useState('');

    return (
        <div className={styles.wrapper}>
            <Header handleSearch={setSearchString} searchString={searchString} />
            <Main searchString={searchString} />
            <Footer />
        </div>
    );
};
