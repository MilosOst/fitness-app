import Sidebar from "./Sidebar.js";
import { Outlet } from "react-router-dom";

function MainLayout() {

    return (
        <div>
            <Sidebar />
            <Outlet />
        </div>
    );
}

export default MainLayout;