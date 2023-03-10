import React from 'react'
import {NavLink} from 'react-router-dom'

export default class Header extends React.Component {
    render () {
        return (
            <div>
                {/* <div className="top-wrapp">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="top-share">
                                    <li><a href="#1"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#2"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#3"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#4"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="#5"><i className="fa fa-pinterest"></i></a></li>
                                    <li><a href="#6"><i className="fa fa-dribbble"></i></a></li>
                                    <li><a href="#7"><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}
                
                <div className="clearfix"></div>  
                            
                <nav className="navbar navbar-default brand-center navbar-sticky white bootsnav">
                    <div className="container">

                        {/* start header navigation */}
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                <i className="fa fa-bars"></i>
                            </button>
                            <a className="navbar-brand" href="#brand"><img src="logo-red.png" className="logo" alt="logo" /></a>
                        </div>
                        {/* ends header navigation */}

                        <div className="collapse navbar-collapse" id="navbar-menu">
                        {/* data-in="fadeInDown" data-out="fadeOutUp" */}
                            <ul className="nav navbar-nav">
                                <li><NavLink to="/pocetna">PO??ETNA</NavLink></li>
                                <li><NavLink to="/onama">O NAMA</NavLink></li>
                                {/* <li><NavLink to="/izbori">IZBORI</NavLink></li> */}
                                <li><NavLink to="/kongres">KONGRES</NavLink></li>
                                {/* <li><NavLink to="/organi_komore">ORGANI KOMORE</NavLink></li> */}
                                <li><NavLink to="/vijesti">VIJESTI</NavLink></li>
                                {/* <li><NavLink to="/clanovi">??LANOVI KOMORE</NavLink></li> */}
                                {/* <li><NavLink to="/oglasi">OGLASI</NavLink></li> */}
                                <li><NavLink to="/kontakt">KONTAKT</NavLink></li>
                                <li><a href="https://skcg.ema.health/access/login">PRIJAVA</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}