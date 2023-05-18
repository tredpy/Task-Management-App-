import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import s from './Header.module.scss';

interface HeaderProps {
    className?: string
}
export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(s.Header, {}, [className])}>
            <div className={s.links}>
                <AppLink theme={'primary'} to="/">
                    Главная
                </AppLink>
                <AppLink theme={'primary'} to="/profile" className={s.profile}>
                    Профиль
                </AppLink>
            </div>
        </div>
    );
};
