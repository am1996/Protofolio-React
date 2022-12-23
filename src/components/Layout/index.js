import './index.scss';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return(
        <div>
            <h1 class="yellow-shine header">&lt;body&gt;</h1>
            <Outlet />
            <h1 class="yellow-shine footer">&lt;body/&gt;</h1>
        </div>
    );
}
export default Layout;