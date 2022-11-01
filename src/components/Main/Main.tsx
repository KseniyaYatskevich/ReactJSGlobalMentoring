import { Navigation } from '../Navigation/Navigation';
import styles from './Main.module.scss';

export const Main = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.contentWrapper}>
                <Navigation />
            </div>
        </div>
    );
};
