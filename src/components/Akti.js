import React from 'react'
import { withRouter } from 'react-router-dom'
import AktiHeader from './singleComponents/AktiHeader';
import PopularNews from './singleComponents/PopularNews';


class Akti extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            popularNews: []
        }
    }

    componentDidMount() {
        this.props.getPopularNews()
    }

    static getDerivedStateFromProps(props, state) {
        if(props.popularNews !== state.popularNews) {
            return {
                popularNews: props.popularNews
            }
        }
        return null
    }

    render() {
        return (
            <div>
                <AktiHeader />
                <div className="contain-wrapp padding-bot50">	
		            <div className="container">
			            <div className="row">   
                            <div className="col-md-2 col-sm-2 col-lg-2" ></div>
                            <div className="col-md-8 col-sm-8 col-lg-8" >
                                    <div className="recent-widget">
                                    <p style={{'fontSize':'18px' , color:'black', paddingBottom: '30px', textAlign: 'center'}}>Pravni akti</p>
                                        <article className="row post">
                                            <div className="col-md-12" style={{marginLeft: "-30px"}}>
                                                <a href="/cdn/poslovnik2.pdf" style={{'fontSize':'15px' , color:'black'}}>Poslovnik o radu Skupštine SKCG</a>
                                                <ul className="post-meta">
                                                    <li ><i className="fa fa-calendar"></i> 12/10/2021</li>
                                                    <li><i className="fa fa-user"></i> Admin</li>
                                                </ul>
                                            </div>
                                        </article>

                                        <article className="row post">
                                            <div className="col-md-12" style={{marginLeft: "-30px"}}>
                                                <a href="http://stomkomcg.me/StatutSKCG.pdf" style={{'fontSize':'15px' , color:'black'}}>Statut komore</a>
                                                <ul className="post-meta">
                                                    <li><i className="fa fa-user"></i> Admin</li>
                                                </ul>
                                            </div>
                                        </article>

                                        <article className="row post">
                                            <div className="col-md-12" style={{marginLeft: "-30px"}}>
                                                <a href="https://stomkomcg.me/static/CCF_000008.pdf" style={{'fontSize':'15px' , color:'black'}}>Izbori o opozivu članova skupštine</a>
                                                <ul className="post-meta">
                                                    <li><i className="fa fa-user"></i> Admin</li>
                                                </ul>
                                            </div>
                                        </article>

                                        <article className="row post">
                                            <div className="col-md-12" style={{marginLeft: "-30px"}}>
                                                <a href="/cdn/Kodeks stomatoloske zdravstvene etike.doc" style={{'fontSize':'15px' , color:'black'}}>Kodeks stomatološke zdravstvene etike</a>
                                                <ul className="post-meta">
                                                    <li><i className="fa fa-calendar"></i> 18/09/2020</li>
                                                    <li><i className="fa fa-user"></i> Admin</li>
                                                </ul>
                                            </div>
                                        </article>

                                        <article className="row post">
                                            <div className="col-md-12" style={{marginLeft: "-30px"}}>
                                                <a href="/cdn/Poslovnik o radu Izvrsnog odbora.pdf" style={{'fontSize':'15px' , color:'black'}}>Poslovnik o radu Izvršnog odbora</a>
                                                <ul className="post-meta">
                                                    <li><i className="fa fa-calendar"></i> 18/09/2020</li>
                                                    <li><i className="fa fa-user"></i> Admin</li>
                                                </ul>
                                            </div>
                                        </article>

                                        <article className="row post">
                                            <div className="col-md-12" style={{marginLeft: "-30px"}}>
                                                <a href="/cdn/Pravilnik o kontinuiranoj edukaciji i nacinu vrednovanja svih oblika strucnog usavrsavanja doktora stomatologije.pdf" style={{'fontSize':'15px' , color:'black'}}>Pravilnik o kontinuiranoj edukaciji i načinu vrednovanja svih oblika stručnog usavršavanja doktora stomatologije</a>
                                                <ul className="post-meta">
                                                    <li><i className="fa fa-calendar"></i> 18/09/2020</li>
                                                    <li><i className="fa fa-user"></i> Admin</li>
                                                </ul>
                                            </div>
                                        </article>

                                        <article className="row post">
                                            <div className="col-md-12" style={{marginLeft: "-30px"}}>
                                                <a href="/cdn/Pravilnik o nacinu izdavanja upotrebe i sadrzini faksimila.doc" style={{'fontSize':'15px' , color:'black'}}>Pravilnik o načinu izdavanja, upotrebe i sadržini faksimila</a>
                                                <ul className="post-meta">
                                                    <li><i className="fa fa-calendar"></i> 18/09/2020</li>
                                                    <li><i className="fa fa-user"></i> Admin</li>
                                                </ul>
                                            </div>
                                        </article>

                                        <article className="row post">
                                            <div className="col-md-12" style={{marginLeft: "-30px"}}>
                                                <a href="/cdn/Pravilnik o organizaciji i sistematizaciji radnih mjesta.pdf" style={{'fontSize':'15px' , color:'black'}}>Pravilnik o organizaciji i sistematizaciji radnih mjesta</a>
                                                <ul className="post-meta">
                                                    <li><i className="fa fa-calendar"></i> 18/09/2020</li>
                                                    <li><i className="fa fa-user"></i> Admin</li>
                                                </ul>
                                            </div>
                                        </article>

                                        <article className="row post">
                                            <div className="col-md-12" style={{marginLeft: "-30px"}}>
                                                <a href="/cdn/Pravilnik o organizaciji postupku i nacinu rada Suda Komore.pdf" style={{'fontSize':'15px' , color:'black'}}>Pravilnik o organizaciji, postupku i načinu rada Suda Komore</a>
                                                <ul className="post-meta">
                                                    <li><i className="fa fa-calendar"></i> 18/09/2020</li>
                                                    <li><i className="fa fa-user"></i> Admin</li>
                                                </ul>
                                            </div>
                                        </article>

                                        <article className="row post">
                                            <div className="col-md-12" style={{marginLeft: "-30px"}}>
                                                <a href="/cdn/Pravilnik o podruznicama SKCG.pdf" style={{'fontSize':'15px' , color:'black'}}>Pravilnik o podružnicama SKCG</a>
                                                <ul className="post-meta">
                                                    <li><i className="fa fa-calendar"></i> 18/09/2020</li>
                                                    <li><i className="fa fa-user"></i> Admin</li>
                                                </ul>
                                            </div>
                                        </article>

                                        <article className="row post">
                                            <div className="col-md-12" style={{marginLeft: "-30px"}}>
                                                <a href="/cdn/Pravilnik o postupku hitnih nabavki SKCG.pdf" style={{'fontSize':'15px' , color:'black'}}>Pravilnik o postupku hitnih nabavki, SKCG</a>
                                                <ul className="post-meta">
                                                    <li><i className="fa fa-calendar"></i> 18/09/2020</li>
                                                    <li><i className="fa fa-user"></i> Admin</li>
                                                </ul>
                                            </div>
                                        </article>

                                        <article className="row post">
                                            <div className="col-md-12" style={{marginLeft: "-30px"}}>
                                                <a href="/cdn/Pravilnik o postupku nabavke male vrijednosti SKCG.pdf" style={{'fontSize':'15px' , color:'black'}}>Pravilnik o postupku nabavke male vrijednosti, SKCG</a>
                                                <ul className="post-meta">
                                                    <li><i className="fa fa-calendar"></i> 18/09/2020</li>
                                                    <li><i className="fa fa-user"></i> Admin</li>
                                                </ul>
                                            </div>
                                        </article>

                                    </div>

                            </div>

                            <div className="col-md-2 col-sm-2 col-lg-2" ></div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default withRouter(Akti)