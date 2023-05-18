import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import s from './Button.module.scss';

export type ButtonView = 'clear'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    view?: ButtonView
}
export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        view,
        ...otherProps
    } = props;
    return (
        <button
            type="button"
            className={classNames(s.Button, {}, [className, s[view]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
