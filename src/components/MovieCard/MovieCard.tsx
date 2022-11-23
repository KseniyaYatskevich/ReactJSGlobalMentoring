import { useState } from 'react';

import More from '../../asset/images/more.svg';
import Close from '../../asset/images/close.svg';

import { MovieImage } from '../MovieImage/MovieImage';

import styles from './MovieCard.module.scss';

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

interface MovieCardProps {
    movie: Movie;
    setIsEditMovie: (arg0: boolean) => void;
    setDialogOpened: (arg0: boolean) => void;
    setIsDeleteMovie: (arg0: boolean) => void;
    cardClickHandler: (arg0: Movie) => void;
    setMovieInfo: (arg0: Movie) => void;
    setShowDescription: (arg0: boolean) => void;
}

export const MovieCard = ({
    movie,
    setIsEditMovie,
    setDialogOpened,
    setIsDeleteMovie,
    cardClickHandler
}: MovieCardProps) => {
    const [isMoreMenuOppened, setIsMoreMenuOppened] = useState(false);

    const moreMenuShow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsMoreMenuOppened(true);
    };

    const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsMoreMenuOppened(false);
    };

    const editMovie = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsEditMovie(true);
        setDialogOpened(true);
    };

    const deteleMovie = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDeleteMovie(true);
        setDialogOpened(true);
    };

    const releaseDate = new Date(movie.release_date).getFullYear();

    return (
        <div
            className={styles.wrapper}
            onClick={() => cardClickHandler(movie)}
            onKeyDown={() => cardClickHandler(movie)}
            role="button"
            tabIndex={0}
        >
            {!isMoreMenuOppened ? (
                <button className={styles.moreBtn} type="button" onClick={(e) => moreMenuShow(e)}>
                    <More />
                </button>
            ) : (
                <div className={styles.menu}>
                    <button className={styles.closeBtn} type="button" onClick={onClose}>
                        <Close />
                    </button>
                    <button className={styles.menuBtn} type="button" onClick={editMovie}>
                        Edit
                    </button>
                    <button className={styles.menuBtn} type="button" onClick={deteleMovie}>
                        Delete
                    </button>
                </div>
            )}
            <MovieImage path={movie.poster_path} title={movie.title} />
            <div className={styles.description}>
                <div>
                    <p className={styles.title}>{movie.title}</p>
                    <p className={styles.genre}>{movie.genres.join(', ')}</p>
                </div>
                <div className={styles.year}>{releaseDate}</div>
            </div>
        </div>
    );
};
