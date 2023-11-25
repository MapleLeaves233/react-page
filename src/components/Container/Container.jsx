import styles from './Container.module.scss';

export const Container = ({children}) => {
    return <div className={styles.root}>{children}</div>
}