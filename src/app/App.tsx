import {useTheme} from "shared/lib/useTheme/useTheme";
import {ThemeSwitcher} from "features/ThemeSwitcher";
import {classNames} from "shared/lib/classNames/classNames";
import './styles/index.scss'

const App = () => {
    const {theme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <div>HEADER</div>
            <div className='wrapper'>
                <div>
                    <ThemeSwitcher/>
                </div>
                <div>MAIN</div>
            </div>
        </div>
    );
};

export default App;
