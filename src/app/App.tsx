import {useTheme} from "shared/lib/useTheme/useTheme";
import './styles/index.scss'

const App = () => {
    const { theme } = useTheme();
    return (
        <div className='app'>
            <div>HEADER</div>
            <div className='wrapper'>
                <div>SIDEBAR</div>
                <div>MAIN</div>
            </div>
        </div>
    );
};

export default App;
