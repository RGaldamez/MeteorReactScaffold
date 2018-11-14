import React from 'react';


class Navbar extends React.Component {

    render() {
        return (
            <nav class="navbar navbar-expand-sm navbar-light bg-light mb-3">
                <div class="container">
                    <a class="navbar-brand" href="#">Navbar</a>

                    <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav1">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav1">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }



}

export default Navbar;