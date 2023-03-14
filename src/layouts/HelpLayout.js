import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
    return (
        <div className="help-layout">
            <h2>Website Help</h2>
            <p>You neeed help brah!</p>

            <nav>
                <NavLink to='faq'>FAQ</NavLink>
                <NavLink to='contact'>Contact Us</NavLink>
            </nav>
            <Outlet />
        </div>
    );
}

export default HelpLayout;