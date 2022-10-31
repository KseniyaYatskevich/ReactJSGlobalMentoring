import { Header } from '../Header/Header';

import styles from './AppLayout.module.scss';

export const AppLayout = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
        </div>
    );
};
