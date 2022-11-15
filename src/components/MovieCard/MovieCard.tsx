import { useState } from 'react';

import brokenImage from '../../asset/images/emptyPoster.jpg';
import More from '../../asset/images/more.svg';
import Close from '../../asset/images/close.svg';

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
    setIsEditMovie: (arg0: boolean) => void;
    setDialogOpened: (arg0: boolean) => void;
    setIsDeleteMovie: (arg0: boolean) => void;
}

export const MovieCard = ({
    title,
    release_date,
    poster_path,
    genres,
    setIsEditMovie,
    setDialogOpened,
    setIsDeleteMovie
}: Movie) => {
    const [imageFailed, setImageFailed] = useState(false);
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

    const releaseDate = new Date(release_date).getFullYear();

    return (
        <div className={styles.wrapper}>
            <a href={title}>
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
                {!imageFailed ? (
                    <img
                        src={poster_path}
                        className={styles.image}
                        alt={title}
                        onError={() => setImageFailed(true)}
                        loading="lazy"
                    />
                ) : (
                    <img src={brokenImage} alt={title} className={styles.brokenImage} />
                )}
                <div className={styles.description}>
                    <div>
                        <p className={styles.title}>{title}</p>
                        <p className={styles.genre}>{genres.join(', ')}</p>
                    </div>
                    <div className={styles.year}>{releaseDate}</div>
                </div>
            </a>
        </div>
    );
};
