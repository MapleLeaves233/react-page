import { UserIcon } from "../../assets/icons";

import styles from './Button.module.scss';
import clsx from "clsx";

// children: React.ReactNode
// icon: Svg
// color: 'red' | 'white' | 'black'
// counter: number

const buttonVariants = {
    red: {
        className: styles.isRedVariant
    },
    white: {
        className: styles.isWhiteVariant
    },
    black: {
        className: styles.isBlackVariant
    }
}

export const Button = (props) => {
    const {children, color = 'white'}= props;

    const Icon = props.icon
    console.log(props)

    return <div className={styles.wrapper}>
        <button className={clsx(styles.root, buttonVariants[color].className)}>
            <Icon className={styles.icon}/>
            <span>{children}</span>
        </button>

        <div className={styles.counter}>12</div>
    </div>

}
