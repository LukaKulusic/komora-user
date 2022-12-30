import React from 'react'
import { withRouter } from 'react-router-dom'

class EmaPlatform extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            width: 0,
            path: '',
            height: '',
            fontSize: '28px',
            lastId: 0
        }
    }   

    componentDidMount() {
        this.getScreenSize()
    }

    getScreenSize = () => {
        let _path, _height, _fontSize
        let width = window.innerWidth
        if(width > 600) {
            _path = "url(../img/emaPlatform.png)"
            _height = '600px'
            // _fontSize = '20px'
        } else {
            _path = "url(../img/emaPlatformS.png)"
            _height = '220px'
            _fontSize = '20px'
        }
        this.setState({
            width: window.innerWidth,
            path: _path,
            height: _height,
            fontSize: _fontSize
        })
    }


    render() {
        return(

            // padding-bot50
            // <div className="contain-wrapp">	
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-sm-12">
                        {/* <div style={{'width':'100%','height':'660px', 'backgroundImage':'url(../img/emaPlatform.png)', 'backgroundSize':'cover'}}></div> */}
                        
                        <div style={{'width':'100%','height':`${this.state.height}`, 'backgroundImage':`${this.state.path}`, 'backgroundSize':'cover'}}></div>
                        
                        {/* <div id="layerslider" style={{'width':'100%','height':`${this.state.height}`, 'backgroundImage':`${this.state.path}`}}> </div> */}

                    </div>
                </div>

                <div className="row">
                    <div className="col-md-10 col-sm-12">
                        <p className="p-Ema" style={{'fontWeight':'bold'}}>
                            <a href="https://skcg.ema.health/access/login">Aplikaciju možete otvoriti klikom na link</a>
                        </p>
                        <div>
                            <p className="p-Ema">SK CG je aplikacija svih članova Stomatološke komore Crne Gore. Aplikacija predstavlja posebno prilagođenu verziju Ema Chamber Platform-e za potrebe Stomatološke komore Crne Gore.</p>
                        </div>
                        
                        <div>
                            <p className="p-Ema">Članovi komore korištenjem aplikacije dobijaju pristup svom profilu u registru članova komore. </p>
                            <p className="p-Ema p-Ema-color">Profil sadrži: </p>
                            <li className="li-Ema">lične i kontakt podatke člana</li>
                            <li className="li-Ema">članske informacije, kao što su licence za rad i ostvareni bodovi člana</li>
                            <li className="li-Ema">finansijske podatke, gdje član ima uvid u svoje uplate prema komori</li>
                        </div>


                        <p className="p-Ema">Profil člana predstavlja elektornsku člansku karticu i služi kao zamjena za fizičke kartice. Elektonska članska kartica služi kao legitimacija na svim kongresima i edukacijama.</p>

                        <p className="p-Ema">Pored pristupa svom profilu u registru, član ima mogućnost stručnog usavršavanja putem aplikacije. Svi kongresi, edukacije i drugi oblici stručnog usavršavanja dostupni su članovima. Registracije na svaku edukaciju možete napraviti putem aplikacije, pratiti sve online edukacije i za to dobiti certifikat.</p>

                        <p className="p-Ema">Putem aplikacije član dobija sve obavijesti od komore, te ima pristup potrebnim dokumentima. Publikacije komore su dostupne elektronski a svako novo izdanje dostupno je putem aplikacije.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-10 col-sm-12">
                        <p className="p-Ema p-Ema-color">Mobilnu aplikaciju možete preuzeti klikom na dugme</p>

                        <div className="col-sm-3 col-lg-3 buttom_Ema">
                            <a href="#" className="btn btn-store">
                                <span className="fa fa-apple fa-3x pull-left"></span> 
                                <span className="btn-label">Download on the</span>
                                <span className="btn-caption">App Store</span>
                            </a>
                        </div>
                        <div className="col-sm-3 col-lg-3 col-lg-offset-6 buttom_Ema">
                            <a href="https://play.google.com/store/apps/details?id=health.ema.institutions.skcg" className="btn btn-store">
                                <span className="fa fa-android fa-3x pull-left"></span> 
                                <span className="btn-label">Download on the</span>
                                <span className="btn-caption">Google Play</span>
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default withRouter (EmaPlatform)