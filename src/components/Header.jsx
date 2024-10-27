import logo from './assets/logo.png'

export default function Header() {
    return (
        <nav className='navbar mb-4 p-0'>
            <div className="container">
                <a className="navbar-brand" href="/">
                    <div className="d-flex">
                        <img src={logo} alt="logo" className="mr-2" />
                        <div>Project Management System</div>
                    </div>
                </a>
            </div>
        </nav>
    )
}
// This component is used for making the header of the page