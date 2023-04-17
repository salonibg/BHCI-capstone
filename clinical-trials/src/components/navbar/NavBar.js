import './NavBar.css'

const NavBar = () => {
    return (
        <div className="navigation">
            <div className="topband"> 
                <div className='nih-logo'><img src="./nih-logo.png"/> </div>
            </div>
            <div className="midBand">
                <div className='clinicaltrials-logo'><img src="./clinicaltrials-logo.png"/> </div>
                <div class="dropdown">
                    <button>Trial Applications ▼</button>
                    <div class="dropdown-options">
                        <a href="#">xyz</a>
                        <a href="#">xyz</a>
                        <a href="#">xyz</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button>About This Site ▼</button>
                    <div class="dropdown-options">
                        <a href="#">xyz</a>
                        <a href="#">xyz</a>
                        <a href="#">xyz</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button>Data About Studies ▼</button>
                    <div class="dropdown-options">
                        <a href="#">xyz</a>
                        <a href="#">xyz</a>
                        <a href="#">xyz</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button>Resources ▼</button>
                    <div class="dropdown-options">
                        <a href="#">xyz</a>
                        <a href="#">xyz</a>
                        <a href="#">xyz</a>
                    </div>
                </div>
            </div>
          </div>
    );
}

export default NavBar;