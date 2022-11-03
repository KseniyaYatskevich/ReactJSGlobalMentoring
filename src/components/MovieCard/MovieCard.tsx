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
    return (
        <div className={styles.wrapper}>
            <a href={title}>
                <img className={styles.image} src={poster_path} alt={title} />
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
