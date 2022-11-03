import { useState } from 'react';

import brokenImage from '../../asset/images/emptyPoster.jpg';
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

export const MovieCard = ({ title, release_date, poster_path, genres }: Movie) => {
    const [imageFailed, setImageFailed] = useState(false);

    return (
        <div className={styles.wrapper}>
            <a href={title}>
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
                    <div className={styles.year}>{release_date.slice(0, 4)}</div>
                </div>
            </a>
        </div>
    );
};
