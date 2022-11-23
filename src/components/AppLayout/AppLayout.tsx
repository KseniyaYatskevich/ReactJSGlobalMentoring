import { useState } from 'react';

import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Modal } from '../Modal/Modal';
import { MovieForm } from '../MovieForm/MovieForm';
import { DeleteMovieForm } from '../DeleteMovieForm/DeleteMovieForm';

import MovieContext from '../../context/MovieContext';

import styles from './AppLayout.module.scss';

interface Movie {
    id: number;
    title: string;
    tagline: string;
    vote_average: number;
    vote_count: number;
    release_date: string;
    poster_path: string;
    overview: string;
    budget: number;
    revenue: number;
    genres: string[];
    runtime: number;
}

export const AppLayout = () => {
    const [searchString, setSearchString] = useState('');
    const [dialogOpened, setDialogOpened] = useState(false);

    const [isAddMovie, setIsAddMovie] = useState(false);
    const [isEditMovie, setIsEditMovie] = useState(false);
    const [isDeleteMovie, setIsDeleteMovie] = useState(false);

    const [showDescription, setShowDescription] = useState(false);

    const onClose = () => {
        setIsAddMovie(false);
        setIsDeleteMovie(false);
        setIsEditMovie(false);
        setDialogOpened(false);
    };

    const [movie, setMovieInfo] = useState<Movie>({
        id: 0,
        title: '',
        tagline: '',
        vote_average: 0,
        vote_count: 0,
        release_date: '',
        poster_path: '',
        overview: '',
        budget: 0,
        revenue: 0,
        genres: [],
        runtime: 0
    });

    return (
        <MovieContext.Provider value={{ movie, showDescription, setShowDescription }}>
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
                    setShowDescription={setShowDescription}
                    setMovieInfo={setMovieInfo}
                />
                <Footer />
                <Modal isOpened={dialogOpened} onClose={onClose}>
                    {isAddMovie && <MovieForm title="Add movie" />}
                    {isEditMovie && <MovieForm title="Edit movie" />}
                    {isDeleteMovie && <DeleteMovieForm />}
                </Modal>
            </div>
        </MovieContext.Provider>
    );
};
