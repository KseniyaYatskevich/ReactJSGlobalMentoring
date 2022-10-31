import styles from './Header.module.scss';

export const Header = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.logo}>
                <span>netflix</span>roulette
            </h1>
            <button className={styles.button}>+ Add movie</button>
            <h2>Find your movie</h2>
            <input className={styles.searchInput} type="search" placeholder="What do you want to watch?" />
        </div>
    );
};
