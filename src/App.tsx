import Image from './asset/images/react.png';
import Icon from './asset/images/highlight-star.svg';

import './styles.scss';

export const App = () => {
    return (
        <>
            <h1>
                Hello React {process.env.NODE_ENV} {process.env.name}
            </h1>
            <img src={Image} alt="logo" />
            <img src={Icon} alt="logo" width="30" />
        </>
    );
};
