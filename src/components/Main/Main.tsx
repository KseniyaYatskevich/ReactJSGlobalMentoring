import { Navigation } from '../Navigation/Navigation';
import { MovieList } from '../MovieList/MovieList';

import styles from './Main.module.scss';

export const Main = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.contentWrapper}>
                <Navigation />
                <MovieList />
            </div>
        </div>
    );
};
