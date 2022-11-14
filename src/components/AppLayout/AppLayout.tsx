import { useState } from 'react';

import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Modal } from '../Modal/Modal';
import { MovieForm } from '../MovieForm/MovieForm';
import { DeleteMovieForm } from '../DeleteMovieForm/DeleteMovieForm';

import styles from './AppLayout.module.scss';

export const AppLayout = () => {
    const [searchString, setSearchString] = useState('');
    const [dialogOpened, setDialogOpened] = useState(false);

    const [isAddMovie, setIsAddMovie] = useState(false);
    const [isEditMovie, setIsEditMovie] = useState(false);
    const [isDeleteMovie, setIsDeleteMovie] = useState(false);

    const onClose = () => {
        setIsAddMovie(false);
        setIsDeleteMovie(false);
        setIsEditMovie(false);
        setDialogOpened(false);
    };

    return (
        <div className={styles.wrapper}>
            <Header
                handleSearch={setSearchString}
                searchString={searchString}
                setDialogOpened={setDialogOpened}
                setIsAddMovie={setIsAddMovie}
            />
            <Main
                searchString={searchString}
                setIsEditMovie={setIsEditMovie}
                setDialogOpened={setDialogOpened}
                setIsDeleteMovie={setIsDeleteMovie}
            />
            <Footer />
            <Modal isOpened={dialogOpened} onClose={onClose}>
                {isAddMovie && <MovieForm title="Add movie" />}
                {isEditMovie && <MovieForm title="Edit movie" />}
                {isDeleteMovie && <DeleteMovieForm />}
            </Modal>
        </div>
    );
};
