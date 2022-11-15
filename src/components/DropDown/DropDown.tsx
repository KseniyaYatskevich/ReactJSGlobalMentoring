import { ChangeEvent } from 'react';
import Chevron from '../../asset/images/chevron.svg';

import styles from './DropDown.module.scss';

interface IDropdownProps {
    options: {
        value: string;
        text: string;
    }[];
    selected: string;
    id?: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const Dropdown = ({ options, selected, onChange, id }: IDropdownProps) => {
    return (
        <div className={styles.dropdown}>
            <select className={styles.select} id={id} value={selected} onChange={onChange}>
                {options.map((item) => (
                    <option key={item.value} value={item.value}>
                        {item.text}
                    </option>
                ))}
            </select>
            <Chevron className={styles.icon} />
        </div>
    );
};
