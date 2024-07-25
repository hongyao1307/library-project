export const Footer = () => {
    return (
        <div className="main-color">
            <footer className="container d-flex flex-wrap 
                justify-content-between align-items-center py-5 main color">
                <ul className="nav navbar-dark col-md-3 justify-content-end">
                    <li className="nav-item">
                        <a href='#' className="nav-link px-2 text-white">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href='#' className="nav-link px-2 text-white">
                            Search Books
                        </a>
                    </li>
                </ul>
                <p className="col-md-3 mb-0 text-white footer-text">
                    Jessie Song<br/>
                    Github: <a className='text-white' href='https://github.com/hongyao1307'>https://github.com/hongyao1307</a>
                </p>
            </footer>
        </div>
    )
}