import style from './ErrorBoundary.module.scss';

export const ErrorBoundary = () => {
    return (
        <div className={style.wrapper}>
            <p className={style.title}>Something went wrong.</p>
        </div>
    );
};
