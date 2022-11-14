import styles from './DeleteMovieForm.module.scss';

export const DeleteMovieForm = () => {
    return (
        <>
            <div className={styles.title}>Delete Movie</div>
            <p className={styles.text}>Are you sure you want to delete this movie?</p>
            <button className={styles.btn} type="button">
                Confirm
            </button>
        </>
    );
};
