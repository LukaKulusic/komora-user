import React from 'react'
// import NforFooter from './singleComponents/NforFooter';

export default class Footer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            details: [],
            news: []
        }
    }

    componentDidMount() {
        this.setup()
    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState({
    //         details: nextProps.details,
    //         news: nextProps.news
    //     })
    // }

    static getDerivedStateFromProps(nextProps, prevProps) {
        let _details = [], _news = []
        if(nextProps.details !== prevProps.details) {
            _details = nextProps.details
            _news = nextProps.news
            return {
                details: _details,
                news: _news
            } 
        }
        return null
    }

    setup = () => {
        this.props.getDetails();
        this.props.getNews();
    }

    render() {
        return (
            <div>
                <footer style={{backgroundColor: "#fafafa", color: 'black'}}>
                    <div className="container" style={{color: 'black'}}>
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-lg-4">
                                <div className="widget">
                                    <div className="col-md-4 col-sm-4 col-lg-4">
                                        <img src="logo-red.png" className="marginbot15" style={{'height':'100px'}} alt="" />
                                    </div>
                                    <div className="col-md-8 col-sm-8 col-lg-8">
                                        <h6 style={{color: 'black'}}>Društvene mreže</h6>
                                        <p style={{paddingBottom: '10px', fontSize:'14px'}}>
                                            Sve aktuelnosti vezane za komoru možete pratiti na našim nalozima na društvenim mrežama.
                                        </p>
                                        <a href="https://www.facebook.com/MNEdentalchamber/?modal=admin_todo_tour"><i className="fa fa-facebook fa-2x icon-square" style={{marginRight: '2px'}}></i></a>
                                        <a href="https://www.instagram.com/stomatoloskakomoracg/"><i className="fa fa-instagram fa-2x icon-square"></i></a>
                                    </div>

                                </div>
                            </div>
                            
                            <div className="col-md-4 col-sm-4 col-lg-4">
                                <div className="widget">
                                    <h6 a href="http://stomkomcg.me/StatutSKCG.pdf" style={{paddingBottom:'10px', color: 'black'}}>Vezani linkovi</h6>
                                    <ul className="recent-post">
                                        <li>
                                            <p style={{fontSize:'14px'}}><a href="https://www.gov.me/cyr/mzd" target="_blank" style={{color: 'black'}}>Ministarstvo zdravlja</a></p>
                                        </li>
                                        <li>
                                            <p style={{fontSize:'14px'}}><a href="https://fzocg.me" target="_blank" style={{color: 'black'}}>Fond za zdravstveno osiguranje Crne Gore</a></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-lg-4">
                                <div className="widget">
                                    <h6 style={{color: 'black'}}>Kontakt</h6>
                                    <div className="tweet" style={{color: 'black'}}>
                                        <p style={{color: 'black'}}>Adresa: {this.state.details.address || ""} , {this.state.details.city || ""}</p>
                                        <p>Tel1: {this.state.details.phone1 || ""} </p>
                                        <p>Tel2: {this.state.details.phone2 || ""} </p>
                                        <p>E-mail: {this.state.details.email || ""}</p>
                                        <p>E-mail: stomatoloskakomoracg@gmail.com</p>
                                        <p>Radno vrijeme: {this.state.details.work_time || ""} </p>
                                        <p>Br.žiro računa: { this.state.details.bank_account || ""} </p>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="col-md-3 col-sm-4">
                                <div className="widget">
                                    <img src="logo-red.png" className="marginbot15" style={{'height':'100px'}} alt="" />
                                    <h6>Društvene mreže</h6>
                                    <p>
                                        Sve aktuelnosti vezane za komoru možete pratiti na našim nalozima na društvenim mrežama.
                                    </p>
                                    <a href="https://www.facebook.com/MNEdentalchamber/?modal=admin_todo_tour"><i className="fa fa-facebook fa-2x icon-square"></i></a>
                                    <a href="https://www.instagram.com/stomatoloskakomoracg/"><i className="fa fa-instagram fa-2x icon-square"></i></a>
                                </div>
                            </div> */}
                            {/* <div className="col-md-3 col-sm-3">
                                <div className="widget">
                                    <h5>Bilteni komore</h5>
                                    <ul className="recent-post">
                                        <li>
                                            <i className="fa fa-file-image-o post-data marginIcon"></i>
                                            <h6><a href="http://www.stomkomcg.me/Bilten1.pdf">Bilten br.1</a></h6>
                                        </li>
                                        <li>
                                            <i className="fa fa-file-image-o post-data marginIcon"></i>
                                            <h6><a href="http://www.stomkomcg.me/Bilten2.pdf">Bilten br.2</a></h6>
                                        </li>
                                        <li>
                                            <i className="fa fa-file-image-o post-data marginIcon"></i>
                                            <h6><a href="http://www.stomkomcg.me/Bilten3.pdf">Bilten br.3</a></h6>
                                        </li>
                                        <li>
                                            <i className="fa fa-file-image-o post-data marginIcon"></i>
                                            <h6><a href="http://www.stomkomcg.me/Bilten4.pdf">Bilten br.4</a></h6>
                                        </li>
                                        <li>
                                            <i className="fa fa-file-image-o post-data marginIcon"></i>
                                            <h6><a href="http://www.stomkomcg.me/Bilten5.pdf">Bilten br.5</a></h6>
                                        </li>
                                        <li>
                                            <i className="fa fa-file-image-o post-data marginIcon"></i>
                                            <h6><a href="http://www.stomkomcg.me/Bilten6.pdf">Bilten br.6</a></h6>
                                        </li>
                                        <li>
                                            <i className="fa fa-file-image-o post-data marginIcon"></i>
                                            <h6><a href="http://www.stomkomcg.me/Bilten7.pdf">Bilten br.7</a></h6>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                            
                            {/* 
                            <div className="col-md-3 col-sm-3">
                                <div className="widget">
                                    <h5 a href="http://stomkomcg.me/StatutSKCG.pdf">Dokumenta</h5>
                                    <ul className="recent-post">
                                        <li>
                                            <i className="fa fa-file-image-o post-data marginIcon"></i>
                                            <h6><a href="http://stomkomcg.me/StatutSKCG.pdf">Statut komore</a></h6>
                                        </li>
                                        <li>
                                            <i className="fa fa-file-image-o post-data marginIcon"></i>
                                            <h6><a href="https://stomkomcg.me/static/CCF_000008.pdf">Pravilnik o izboru i opozivu članova skupštine</a></h6>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}

            				{/* <div className="col-md-3 col-sm-3">
                                <div className="widget">
                                    <h5>Kontakt</h5>
                                    <div className="tweet">
                                        <p>Adresa: {this.state.details.address || ""} , {this.state.details.city || ""}</p>
                                        <p>Tel1: {this.state.details.phone1 || ""} </p>
                                        <p>Tel2: {this.state.details.phone2 || ""} </p>
                                        <p>E-mail: {this.state.details.email || ""}</p>
                                        <p>Radno vrijeme: {this.state.details.work_time || ""} </p>
                                        <p>Br.žiro računa: { this.state.details.bank_account || ""} </p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}