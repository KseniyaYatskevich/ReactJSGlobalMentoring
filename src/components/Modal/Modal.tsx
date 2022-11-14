import { useEffect, useRef } from 'react';

import Close from '../../asset/images/close.svg';

import styles from './Modal.module.scss';

interface ModalProps {
    isOpened: boolean;
    onClose(): void;
    children: React.ReactNode;
    setIsAddMovie: (arg: boolean) => void;
}

export const Modal = ({ isOpened, children, onClose, setIsAddMovie }: ModalProps) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const lastActiveElement = useRef<HTMLElement | null>(null);

    /**
     * Opens dialog and saves previous focused element
     */
    useEffect(() => {
        const dialogNode = dialogRef.current;
        if (isOpened) {
            lastActiveElement.current = document.activeElement as HTMLElement;
            if (!dialogNode?.open) dialogNode?.showModal();

            // prevent body scroll while sidebar is opened
            document.body.classList.add('no-scroll');
        } else {
            if (dialogNode?.open) dialogNode?.close();
            lastActiveElement.current?.focus();

            document.body.classList.remove('no-scroll');
        }
    }, [isOpened]);

    /**
     * Calls onClose callback when dialog closes (e.g. when Esc pressed)
     */
    useEffect(() => {
        const dialogNode = dialogRef.current;

        if (dialogNode) {
            dialogNode.addEventListener('cancel', onClose);
            return () => {
                dialogNode.removeEventListener('cancel', onClose);
            };
        }

        setIsAddMovie(false);
    }, [onClose, setIsAddMovie]);

    /**
     * Closes dialog on click outside
     */
    useEffect(() => {
        const dialogNode = dialogRef.current;

        const onClickOutside = (e: Event) => {
            // check if click was not on dialog content but on dialog backdrop
            if (e.target === dialogNode) {
                onClose();
            }
        };

        if (dialogNode) {
            dialogNode.addEventListener('click', onClickOutside);
            return () => {
                dialogNode.removeEventListener('click', onClickOutside);
            };
        }

        setIsAddMovie(false);
    }, [onClose, setIsAddMovie]);

    return (
        <dialog ref={dialogRef} className={styles.dialog}>
            <div ref={contentRef} className={styles.content}>
                <button className={styles.closeBtn} type="button" onClick={onClose}>
                    <Close />
                </button>
                {children}
            </div>
        </dialog>
    );
};
