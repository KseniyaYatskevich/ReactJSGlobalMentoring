import { useState } from 'react';

import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Modal } from '../Modal/Modal';
import { MovieForm } from '../MovieForm/MovieForm';

import styles from './AppLayout.module.scss';

export const AppLayout = () => {
    const [searchString, setSearchString] = useState('');
    const [dialogOpened, setDialogOpened] = useState(false);

    const [isAddMovie, setIsAddMovie] = useState(false);
    // const [isEditMovie, setIsEditMovie] = useState(false);

    return (
        <div className={styles.wrapper}>
            <Header
                handleSearch={setSearchString}
                searchString={searchString}
                setDialogOpened={setDialogOpened}
                setIsAddMovie={setIsAddMovie}
            />
            <Main searchString={searchString} />
            <Footer />
            <Modal isOpened={dialogOpened} onClose={() => setDialogOpened(false)} setIsAddMovie={setIsAddMovie}>
                {isAddMovie && <MovieForm title="Add movie" />}
                {/* {isEditMovie && <MovieForm title="Edit movie" />} */}
            </Modal>
        </div>
    );
};
