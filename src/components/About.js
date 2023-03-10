import React from 'react'
import { withRouter } from 'react-router-dom'
import BoardMember from './singleComponents/BoardMember';
import PageHeader from './singleComponents/PageHeader'
import ParliamentMember from './singleComponents/ParliamentMember';

class About extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            boardMembers: [],
            membersCt: [],
            membersPg: [],
            membersNk: [],
            membersSouth: [],
            membersNorth: [],
            aboutContent: '',
            aboutTitle: '',
            parliamentContent: '',
            content: ''
        }
    }

    componentDidMount() {
        this.setup()
    }

    setup = () => {
        this.props.getBoardMembers()
        this.props.getMembersCt()
        this.props.getMembersPg()
        this.props.getMembersNk()
        this.props.getMembersSouth()
        this.props.getMemberNorth()
        this.props.getContent()
    }

    // componentWillReceiveProps(nextProps) {
    //     let aboutContent = ''
    //     let aboutTitle = ''
    //     let parliamentContent= ''
    //     if(nextProps.content !== undefined) {
    //         aboutContent = nextProps.content.aboutContent
    //         aboutTitle = nextProps.content.aboutTitle
    //         parliamentContent = nextProps.content.parliamentContent
    //     }
    //     this.setState({
    //         boardMembers: nextProps.boardMembers,
    //         membersCt: nextProps.membersCt,
    //         membersPg: nextProps.membersPg,
    //         membersNk: nextProps.membersNk,
    //         membersSouth: nextProps.membersSouth,
    //         membersNorth: nextProps.membersNorth,
    //         aboutContent: aboutContent,
    //         aboutTitle: aboutTitle,
    //         parliamentContent: parliamentContent
    //     })
    // }

    static getDerivedStateFromProps(nextProps, prevProps) {
        let _aboutContent, _aboutTitle, _parliamentContent, _boardMembers, _membersCt, _membersPg, _membersNk, _membersSouth,_membersNorth
        if(nextProps.content !== prevProps.content.parliamentContent) {
            _aboutContent = nextProps.content.aboutContent
            _aboutTitle = nextProps.content.aboutTitle
            _parliamentContent = nextProps.content.parliamentContent
            _boardMembers = nextProps.boardMembers
            _membersCt = nextProps.membersCt
            _membersPg = nextProps.membersPg
            _membersNk = nextProps.membersNk
            _membersSouth = nextProps.membersSouth
            _membersNorth = nextProps.membersNorth

        }
        // if(nextProps.boardMembers !== prevProps.boardMembers) {
        //     _boardMembers = nextProps.boardMembers
        // }
        return {
            aboutContent: _aboutContent,
            aboutTitle: _aboutTitle,
            parliamentContent: _parliamentContent,
            boardMembers: _boardMembers,
            membersCt: _membersCt,
            membersPg: _membersPg,
            membersNk: _membersNk,
            membersSouth: _membersSouth,
            membersNorth: _membersNorth,
        } 
    }

    render() {
        return(
            <div>
                <PageHeader />
                {/* team members start */}
                <div className="contain-wrapp padding-bot60">	
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-head" >
                                    <h4>O nama </h4>
                                    <p >{ this.state.aboutTitle }</p>
                                </div>
                                <p>
                                    { this.state.aboutContent }
                                </p>
                                <p style={{paddingBottom: '5px', paddingTop: '5px'}}>Skra??eni naziv Komore je : SKCG</p>
                                <p style={{paddingBottom: '5px'}}>Naziv Komore na engleskom je : Dental Chamber of Montenegro.</p>
                                <p style={{paddingBottom: '5px'}}>Logo Komore je kru??nog oblika, sa geografskom karom Crne Gore crvene boje, u sredini, a preko koje su tri zareza bijele boje - siluete zuba, i oko koje je krug crvene boje u ??ijem su gornjem dijelu ispisanje rije??i : " Stomatolo??ka komora CRne Gore", a u donjem dijelu rije??i: "Podgorica".</p>
                                <p style={{paddingBottom: '5px'}}>Pred??ednik Stomatolo??ke komore Crne Gore: spec. dr Vladimir V. Joveti??</p>
                                <p style={{paddingBottom: '5px'}}>Zamjenik pred??ednika Stomatolo??ke komore Crne Gore: spec. dr Aleksandar R. Vukoti??</p>
                            </div>
                            {/* <div className="col-md-8"> */}
                                {/* <div className="team-wrapper">
                                    {
                                        this.state.boardMembers !== undefined ?
                                        this.state.boardMembers.map(member => {
                                            return <BoardMember 
                                                key= {member.id}
                                                id={member.id}
                                                name = {member.name}
                                                role= {member.role}
                                            />
                                        })
                                        : ""
                                    }
                                </div> */}
                            {/* </div> */}
                        </div>
                    </div>
                </div>
                {/* team members end */}


                <div className="contain-wrapp gray-container padding-bot50" style={{backgroundColor: "white"}}>
                    <div className="container">
                        <div className="row">
                            <div style={{textAlign:'center', marginBottom:'15px'}}>??lanstvo u Komori</div>
                            <div style={{textAlign:'center', marginBottom:'15px'}}>??lanstvo u  Komori je obavezno za sve doktore stomatologije koji neposedno pru??aju zdravstvenu za??titu na teritoriji Crne Gore.</div>
                            <div style={{textAlign:'center', marginBottom:'15px'}}>
                                <p style={{marginBottom:'15px'}}>Kontakti</p>
                                <p>sjedi??te Komore:</p>
                                <p style={{marginBottom:'15px'}}>ul. Jovana Toma??evi??a 13/1</p>
                                <p>Kontakt telefon: </p>
                                <p>+382 20/220-833</p>
                                <p style={{marginBottom:'15px'}}>+382 67/345-392 </p>
                                <p>Email: </p>
                                <p>stomatoloskakomoracg@gmail.com</p>
                                <p style={{marginBottom:'15px'}}>kontakt@stomkomcg.me</p>
                                <p>??iro - ra??un </p>
                                <p style={{marginBottom:'15px'}}>510-200340-32 CKB Banka</p>
                            </div>

                            <div style={{marginBottom:'15px'}}>
                                <p style={{fontWeight:'bold'}}>Izvr??ni odbor Stomatolo??ke komore Crne Gore:</p>
                                <p>spec. dr Vladimir V. Joveti?? - pred??ednik,</p>
                                <p>spec. dr Aleksandar R. Vukoti?? - zamjenik pred??ednika,</p>
                                <p>spec. dr Dejan Mu??ura,</p>
                                <p>spec. dr Goran Mandi??,</p>
                                <p>spec. dr Kemal ??ahmanovi??,</p>
                                <p>Doc. dr Marija Antunovi??,</p>
                                <p>Spec. dr Sabahudin Zoronji??,</p>
                                <p>Dr Maksim ??a??enovi??,</p>
                                <p>Dr Miradin Lolovi??.</p>
                            </div>

                            <div style={{marginBottom:'15px'}}>
                                <p style={{fontWeight:'bold', marginBottom:'15px'}}>Skup??tina Stomatolo??ke komore Crne Gore:</p>
                                <p style={{fontWeight:'bold'}}>PODGORICA</p>
                                <p>Dr Ned??ad Dr??evi?? - predsjednik,</p>
                                <p>Spec. dr Milinko Labovi??,</p>
                                <p>Spec. dr Aleksandar Kosti??,</p>
                                <p>Spec. dr Vladimir Popovi??,</p>
                                <p>Dr Boris Ra??natovi??,</p>
                                <p>Dr Nata??a Me??edovi??,</p>
                                <p>Dr Vesko Dakovi??</p>
                                <p>Spec. dr Ma??an ??ljiva??nanin.</p>
                            </div>

                            <div style={{marginBottom:'15px'}}>
                                <p style={{fontWeight:'bold'}}>DANILOVGRAD</p>
                                <p>Dr Marija Savelji??.</p>
                            </div>

                            <div style={{marginBottom:'15px'}}>
                                <p style={{fontWeight:'bold'}}> NIK??I??, ??AVNIK, PLU??INE</p>
                                <p>Dr Jelena Bulaji??,</p>
                                <p>Dr Stevan Kulu??i??,</p>
                                <p>Dr Milovan Buri??,</p>
                                <p>Dr Danilo Pero??evi??.</p>
                            </div>


                            <div style={{marginBottom:'15px'}}>
                                <p style={{fontWeight:'bold'}}>CETINEJE</p>
                                <p>Dr Ivana Peranovi??.</p>
                            </div>

                            <div style={{marginBottom:'15px'}}>
                                <p style={{fontWeight:'bold'}}>BUDVA</p>
                                <p>Dr Dragana Bjelica.</p>
                            </div>

                            <div style={{marginBottom:'15px'}}>
                                <p style={{fontWeight:'bold'}}>HERCEG NOVI</p>
                                <p>Dr Olga Vuksanovi??.</p>
                            </div>

                            <div style={{marginBottom:'15px'}}>
                                <p style={{fontWeight:'bold'}}>KOTOR</p>
                                <p>Dr Nikolina Majstorovi??-Milovi??,</p>
                                <p>Dr Ivan Mirkovi??.</p>
                            </div>

                            <div style={{marginBottom:'15px'}}>
                                <p style={{fontWeight:'bold'}}>HERCEG NOVI</p>
                                <p>Dr Olga Vuksanovi??.</p>
                            </div>

                            <div style={{marginBottom:'15px'}}>
                                <p style={{fontWeight:'bold'}}>TIVAT</p>
                                <p>Dr Marina ??evaljevi??.</p>
                            </div>

                            <div style={{marginBottom:'15px'}}>
                                <p style={{fontWeight:'bold'}}>BIJELO POLJE</p>
                                <p>Spec. dr Biljana Bulatovi??,</p>
                                <p>Dr Emir Kur??ehaji??.</p>
                            </div>

                            <div style={{marginBottom:'15px'}}>
                                <p style={{fontWeight:'bold'}}>BERANE</p>
                                <p>Dr Anica ??uri??i??.</p>
                            </div>
                            
                            <div style={{marginBottom:'15px'}}>
                                <p style={{fontWeight:'bold'}}>RO??AJE, PLAV I ANDRIJEVICA</p>
                                <p>Dr Goran Radenovi??,</p>
                                <p>Dr Amar Noki??.</p>
                            </div>

                            <div style={{marginBottom:'15px'}}>
                                <p style={{fontWeight:'bold'}}>PLJEVLJA</p>
                                <p>Dr Jelena Kalovi??.</p>
                            </div>

                            <div style={{marginBottom:'25px'}}>
                                <p style={{fontWeight:'bold'}}>MOJKOVAC I KOLA??IN</p>
                                <p>Dr Veselin Miladinovi??.</p>
                            </div>

                            <div style={{marginBottom:'25px'}}>
                                <p style={{fontWeight:'bold'}}>Komisija za izradu op??tih i poedina??nih akata:</p>
                                <p>Dr Maja Terzi?? - predsjednica,</p>
                                <p>Dr Jelena Bulaji??,</p>
                                <p>Dr Boris Ra??natovi??,</p>
                                <p>Dr Olga Vuksanovi??,</p>
                                <p>Dr Anica ??uri??i??,</p>
                                <p>Doc. dr Marija Antunovi??.</p>
                            </div>

                            <div style={{marginBottom:'25px'}}>
                                <p style={{fontWeight:'bold'}}>Organizacioni odbor za pripremu i odr??avanje IV Kongresa stomatologa Crne Gore sa me??unarodnim u??e????em:</p>
                                <p>Dr Miradin Lolovi?? - predjsednik,</p>
                                <p>Spec. dr Vladimir V. Joveti??,</p>
                                <p>Dr Jelena Bulaji??,</p>
                                <p>Dr Nata??a Me??edovi??,</p>
                                <p>Spec. dr Nikoleta Mu??ura Vujovi??,</p>
                                <p>Dr Uro?? Toma??rvi??,</p>
                                <p>Dr Ivana Peranovi??,</p>
                                <p>Dr Anica ??uri??i??,</p>
                                <p>Dr Amar Noki??.</p>
                            </div>

                            <div style={{marginBottom:'25px'}}>
                                <p style={{fontWeight:'bold'}}>Komisija za eti??ka pitanja:</p>
                                <p>Dr Marina ??oguri?? - predsjednica,</p>
                                <p>Dr Drago ??ujovi?? - zamjenik predsjednice,</p>
                                <p>Dr Maja Terzi??,</p>
                                <p>Dr Zorka Vaskovi??.</p>
                            </div>

                            <div style={{marginBottom:'25px'}}>
                                <p style={{fontWeight:'bold'}}>Komisija za stru??na pitanja:</p>
                                <p>Prof. dr Jasminka An??eli?? - predsjednica,</p>
                                <p>Spec. dr Jovan Vujovi??,</p>
                                <p>Spec. dr Nikoleta Mu??ura Vujovi??,</p>
                                <p>Dr Milica Sinanovi??,</p>
                                <p>Spec. dr Aleksandar Kosti??.</p>
                            </div>

                            <div style={{marginBottom:'25px'}}>
                                <p style={{fontWeight:'bold'}}>Komisija za kontinuiranu edukaciju:</p>
                                <p>Doc. dr Marija Antunovi?? - predsjednica,</p>
                                <p>Spec. dr Milinko Labovi??,</p>
                                <p>Spec. dr Tamara Bo??kovi?? - Brkanovi??,</p>
                                <p>Dr sci. stom. Biljana Milo??evi??,</p>
                                <p>Dr Vesna Kisi??.</p>
                            </div>

                            <div style={{marginBottom:'25px'}}>
                                <p style={{fontWeight:'bold'}}>Komisija za izdava??ku djelatnost:</p>
                                <p>Dr Milica Radulovi?? - predsjednica,</p>
                                <p>Dr Mirjana Joksimovi??,</p>
                                <p>Dr Jovana Radonji??,</p>
                                <p>Dr Sanja Debelja,</p>
                                <p>Dr Nikola Ba??ovi??.</p>
                            </div>

                            <div style={{marginBottom:'25px'}}>
                                <p style={{fontWeight:'bold'}}>Sud Stomatolo??ke komore Crne Gore:</p>
                                <p>Dr Jovan Buri?? - predsjednik,</p>
                                <p>Dr Tanja Radulovi??,</p>
                                <p>Spec. dr Ljiljana Miju??kovi??.</p>
                            </div>

                            <div style={{marginBottom:'25px'}}>
                                <p style={{fontWeight:'bold'}}>Branilac Stomatolo??ke komore Crne Gore:</p>
                                <p>Dr Radovan Vu??ovi??.</p>
                            </div>

                            <div style={{marginBottom:'25px'}}>
                                <p style={{fontWeight:'bold'}}>Tu??ilac Stomatolo??ke komore Crne Gore:</p>
                                <p>Dr Danijela ??a??i??.</p>
                            </div>

                            <div style={{marginBottom:'25px'}}>
                                <p style={{fontWeight:'bold'}}>Radna grupa za izradu smjernica za izradu Strategije razvoja zdravstva Crne Gore za period od 2023-2027. godine sa akcionim planom za period od 2023-2024. godine:</p>
                                <p>Spec. dr Vladimir V. Joveti??,</p>
                                <p>Dr Ned??ad Dre??evi??,</p>
                                <p>Spec. dr Jovan Vujovi??,</p>
                                <p>Spec dr. Aleksandar Kosti??,</p>
                                <p>Spec. dr Ranko Mugo??a,</p>
                                <p>Dr Veselin Miladinovi??,</p>
                                <p>Spec. dr An??elka Duborija,</p>
                                <p>Dr Maja Terzi??,</p>
                                <p>Dr Boris Ra??natovi??,</p>
                                <p>Dr Amar Noki??,</p>
                                <p>Doc. dr Marija Antunovi??,</p>
                                <p>Dr Jelena Bulaji??. </p>
                            </div>


                            {/* <div className="col-md-8">
                                <div id="wrap-progress" className="wrap-progress">
                                    <div className="progress type3">
                                        <div className="progress-bar" role="progressbar" data-value-progress="29">
                                            <span className="value-progress">00</span>
                                            <span className="data-progress">Podgorica</span>
                                        </div>
                                    </div>
                                    <div className="progress type3">
                                        <div className="progress-bar" role="progressbar" data-value-progress="3">
                                            <span className="value-progress">00</span>
                                            <span className="data-progress">Danilovgrad</span>
                                        </div>
                                    </div>
                                    <div className="progress type3">
                                        <div className="progress-bar" role="progressbar" data-value-progress="12">
                                            <span className="value-progress">00</span>
                                            <span className="data-progress">Nik??i??, ??avnik i Plu??ine</span>
                                        </div>
                                    </div>
                                    <div className="progress type3">
                                        <div className="progress-bar" role="progressbar" data-value-progress="3">
                                            <span className="value-progress">00</span>
                                            <span className="data-progress">Cetinje</span>
                                        </div>
                                    </div>
                                    <div className="progress type3">
                                        <div className="progress-bar" role="progressbar" data-value-progress="6.5">
                                            <span className="value-progress">00</span>
                                            <span className="data-progress">Bar</span>
                                        </div>
                                    </div>
                                    <div className="progress type3">
                                        <div className="progress-bar" role="progressbar" data-value-progress="3">
                                            <span className="value-progress">00</span>
                                            <span className="data-progress">Budva</span>
                                        </div>
                                    </div>
                                    <div className="progress type3">
                                        <div className="progress-bar" role="progressbar" data-value-progress="3">
                                            <span className="value-progress">00</span>
                                            <span className="data-progress">Herceg Novi</span>
                                        </div>
                                    </div>
                                    <div className="progress type3">
                                        <div className="progress-bar" role="progressbar" data-value-progress="6.5">
                                            <span className="value-progress">00</span>
                                            <span className="data-progress">Kotor</span>
                                        </div>
                                    </div>
                                    <div className="progress type3">
                                        <div className="progress-bar" role="progressbar" data-value-progress="3">
                                            <span className="value-progress">00</span>
                                            <span className="data-progress">Tivat</span>
                                        </div>
                                    </div>
                                    <div className="progress type3">
                                        <div className="progress-bar" role="progressbar" data-value-progress="3">
                                            <span className="value-progress">00</span>
                                            <span className="data-progress">Ulcinj</span>
                                        </div>
                                    </div>
                                    <div className="progress type3">
                                        <div className="progress-bar" role="progressbar" data-value-progress="6.5">
                                            <span className="value-progress">00</span>
                                            <span className="data-progress">Bijelo Polje</span>
                                        </div>
                                    </div>
                                    <div className="progress type3">
                                        <div className="progress-bar" role="progressbar" data-value-progress="6.5">
                                            <span className="value-progress">00</span>
                                            <span className="data-progress">Berane, Petnjica, Andrijevica</span>
                                        </div>
                                    </div>
                                    <div className="progress type3">
                                        <div className="progress-bar" role="progressbar" data-value-progress="6.5">
                                            <span className="value-progress">00</span>
                                            <span className="data-progress">Ro??aje, Plav, Gusinje</span>
                                        </div>
                                    </div>
                                    <div className="progress type3">
                                        <div className="progress-bar" role="progressbar" data-value-progress="3">
                                            <span className="value-progress">00</span>
                                            <span className="data-progress">Pljevlja i ??abljak</span>
                                        </div>
                                    </div>
                                    <div className="progress type3">
                                        <div className="progress-bar" role="progressbar" data-value-progress="3">
                                            <span className="value-progress">00</span>
                                            <span className="data-progress">Mojkovac, Kola??in</span>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            
                            {/* <div className="col-md-4">
                                <div className="title-head pull-right">
                                    <h3>Skup??tina komore</h3>
                                </div>
                                <p> */}
                                    {/* {this.state.parliamentContent} */}
                                    {/* Izbor ??lanova skup??tine je u toku...
                                </p>
                            </div> */}

                        </div>
                    </div>
                </div>

                {/* <div className="contain-wrapp padding-bot60">	
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">

                                    <p>
                                        Izbor ??lanova skup??tine po regijama je u toku...
                                    </p> */}
                                {/* <div className="col-md-2 col-md-offset-1">
                                    <p>Podgorica</p>
                                    {
                                        this.state.membersPg !== undefined ?
                                        this.state.membersPg.map(member => {
                                            return <ParliamentMember
                                                    key={member.id}
                                                    name={member.name}
                                                    phone={member.phone}
                                                    company={member.company}
                                                    />
                                        })
                                        : ""
                                    }
                                </div>

                                <div className="col-md-2">
                                    <p>Nik??i??</p>
                                    {
                                        this.state.membersNk !== undefined ?

                                        this.state.membersNk.map(member => {
                                            return <ParliamentMember
                                                    key={member.id}
                                                    name={member.name}
                                                    phone={member.phone}
                                                    company={member.company}
                                                    />
                                        })
                                        : ""
                                    }
                                </div>

                                <div className="col-md-2">
                                    <p>Juzna regija</p>
                                    {
                                        this.state.membersSouth !== undefined ?

                                        this.state.membersSouth.map(member => {
                                            return <ParliamentMember
                                                    key={member.id}
                                                    name={member.name}
                                                    phone={member.phone}
                                                    company={member.company}
                                                    />
                                        })
                                        : ""
                                    }
                                </div>

                                <div className="col-md-2">
                                    <p>Cetinje</p>
                                    {
                                        this.state.membersCt !== undefined ?

                                        this.state.membersCt.map(member => {
                                            return <ParliamentMember
                                                    key={member.id}
                                                    name={member.name}
                                                    phone={member.phone}
                                                    company={member.company}
                                                    />
                                        })
                                        : ""
                                    }
                                </div>

                                <div className="col-md-2">
                                    <p>Sjeverna regija</p>
                                    {
                                        this.state.membersNorth !== undefined ?

                                        this.state.membersNorth.map(member => {
                                            return <ParliamentMember
                                                    key={member.id}
                                                    name={member.name}
                                                    phone={member.phone}
                                                    company={member.company}
                                                    />
                                        })
                                        : ""
                                    }
                                </div> */}
{/* 
                            </div>
                        </div>
                    </div>
                </div> */}





            </div>
        )
    }
}

export default withRouter(About)