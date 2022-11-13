import { useState } from 'react';

import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Modal } from '../Modal/Modal';

import styles from './AppLayout.module.scss';

export const AppLayout = () => {
    const [searchString, setSearchString] = useState('');
    const [dialogOpened, setDialogOpened] = useState(false);

    return (
        <div className={styles.wrapper}>
            <Header handleSearch={setSearchString} searchString={searchString} setDialogOpened={setDialogOpened} />
            <Main searchString={searchString} />
            <Footer />
            <Modal isOpened={dialogOpened} onClose={() => setDialogOpened(false)}>
                <h2>Hello</h2>
            </Modal>
        </div>
    );
};
