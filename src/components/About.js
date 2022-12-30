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
                                <p style={{paddingBottom: '5px', paddingTop: '5px'}}>Skraćeni naziv Komore je : SKCG</p>
                                <p style={{paddingBottom: '5px'}}>Naziv Komore na engleskom je : Dental Chamber of Montenegro.</p>
                                <p style={{paddingBottom: '5px'}}>Logo Komore je kružnog oblika, sa geografskom karom Crne Gore crvene boje, u sredini, a preko koje su tri zareza bijele boje - siluete zuba, i oko koje je krug crvene boje u čijem su gornjem dijelu ispisanje riječi : " Stomatološka komora CRne Gore", a u donjem dijelu riječi: "Podgorica".</p>
                                <p style={{paddingBottom: '5px'}}>Predśednik Stomatološke komore Crne Gore: spec. dr Vladimir V. Jovetić</p>
                                <p style={{paddingBottom: '5px'}}>Zamjenik predśednika Stomatološke komore Crne Gore: spec. dr Aleksandar R. Vukotić</p>
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
                            <div style={{textAlign:'center', marginBottom:'15px'}}>Članstvo u Komori</div>
                            <div style={{textAlign:'center', marginBottom:'15px'}}>Članstvo u  Komori je obavezno za sve doktore stomatologije koji neposedno pružaju zdravstvenu zaštitu na teritoriji Crne Gore.</div>
                            <div style={{textAlign:'center', marginBottom:'15px'}}>
                                <p style={{marginBottom:'15px'}}>Kontakti</p>
                                <p>sjedište Komore:</p>
                                <p style={{marginBottom:'15px'}}>ul. Jovana Tomaševića 13/1</p>
                                <p>Kontakt telefon: </p>
                                <p>+382 20/220-833</p>
                                <p style={{marginBottom:'15px'}}>+382 67/345-392 </p>
                                <p>Email: </p>
                                <p>stomatoloskakomoracg@gmail.com</p>
                                <p style={{marginBottom:'15px'}}>kontakt@stomkomcg.me</p>
                                <p>Žiro - račun </p>
                                <p style={{marginBottom:'15px'}}>510-200340-32 CKB Banka</p>
                            </div>

                            <div style={{marginBottom:'15px'}}>
                                <p style={{fontWeight:'bold'}}>Izvršni odbor Stomatološke komore Crne Gore:</p>
                                <p>spec. dr Vladimir V. Jovetić - predśednik,</p>
                                <p>spec. dr Aleksandar R. Vukotić - zamjenik predśednika,</p>
                                <p>spec. dr Dejan Mušura,</p>
                                <p>spec. dr Goran Mandić,</p>
                                <p>spec. dr Kemal Šahmanović,</p>
                                <p>Doc. dr Marija Antunović,</p>
                                <p>Spec. dr Sabahudin Zoronjić,</p>
                                <p>Dr Maksim Čađenović,</p>
                                <p>Dr Miradin Lolović.</p>
                            </div>

                            <div style={{marginBottom:'15px'}}>
                                <p style={{fontWeight:'bold', marginBottom:'15px'}}>Skupština Stomatološke komore Crne Gore:</p>
                                <p style={{fontWeight:'bold'}}>PODGORICA</p>
                                <p>Dr Nedžad Dršević - predsjednik,</p>
                                <p>Spec. dr Milinko Labović,</p>
                                <p>Spec. dr Aleksandar Kostić,</p>
                                <p>Spec. dr Vladimir Popović,</p>
                                <p>Dr Boris Ražnatović,</p>
                                <p>Dr Nataša Međedović,</p>
                                <p>Dr Vesko Daković</p>
                                <p>Spec. dr Mašan Šljivačnanin.</p>
                            </div>

                            <div style={{marginBottom:'15px'}}>
                                <p style={{fontWeight:'bold'}}>DANILOVGRAD</p>
                                <p>Dr Marija Saveljić.</p>
                            </div>

                            <div style={{marginBottom:'15px'}}>
                                <p style={{fontWeight:'bold'}}> NIKŠIĆ, ŠAVNIK, PLUŽINE</p>
                                <p>Dr Jelena Bulajić,</p>
                                <p>Dr Stevan Kulušić,</p>
                                <p>Dr Milovan Burić,</p>
                                <p>Dr Danilo Perošević.</p>
                            </div>


                            <div style={{marginBottom:'15px'}}>
                                <p style={{fontWeight:'bold'}}>CETINEJE</p>
                                <p>Dr Ivana Peranović.</p>
                            </div>

                            <div style={{marginBottom:'15px'}}>
                                <p style={{fontWeight:'bold'}}>BUDVA</p>
                                <p>Dr Dragana Bjelica.</p>
                            </div>

                            <div style={{marginBottom:'15px'}}>
                                <p style={{fontWeight:'bold'}}>HERCEG NOVI</p>
                                <p>Dr Olga Vuksanović.</p>
                            </div>

                            <div style={{marginBottom:'15px'}}>
                                <p style={{fontWeight:'bold'}}>KOTOR</p>
                                <p>Dr Nikolina Majstorović-Milović,</p>
                                <p>Dr Ivan Mirković.</p>
                            </div>

                            <div style={{marginBottom:'15px'}}>
                                <p style={{fontWeight:'bold'}}>HERCEG NOVI</p>
                                <p>Dr Olga Vuksanović.</p>
                            </div>

                            <div style={{marginBottom:'15px'}}>
                                <p style={{fontWeight:'bold'}}>TIVAT</p>
                                <p>Dr Marina Ševaljević.</p>
                            </div>

                            <div style={{marginBottom:'15px'}}>
                                <p style={{fontWeight:'bold'}}>BIJELO POLJE</p>
                                <p>Spec. dr Biljana Bulatović,</p>
                                <p>Dr Emir Kurćehajić.</p>
                            </div>

                            <div style={{marginBottom:'15px'}}>
                                <p style={{fontWeight:'bold'}}>BERANE</p>
                                <p>Dr Anica Đurišić.</p>
                            </div>
                            
                            <div style={{marginBottom:'15px'}}>
                                <p style={{fontWeight:'bold'}}>ROŽAJE, PLAV I ANDRIJEVICA</p>
                                <p>Dr Goran Radenović,</p>
                                <p>Dr Amar Nokić.</p>
                            </div>

                            <div style={{marginBottom:'15px'}}>
                                <p style={{fontWeight:'bold'}}>PLJEVLJA</p>
                                <p>Dr Jelena Kalović.</p>
                            </div>

                            <div style={{marginBottom:'25px'}}>
                                <p style={{fontWeight:'bold'}}>MOJKOVAC I KOLAŠIN</p>
                                <p>Dr Veselin Miladinović.</p>
                            </div>

                            <div style={{marginBottom:'25px'}}>
                                <p style={{fontWeight:'bold'}}>Komisija za izradu opštih i poedinačnih akata:</p>
                                <p>Dr Maja Terzić - predsjednica,</p>
                                <p>Dr Jelena Bulajić,</p>
                                <p>Dr Boris Ražnatović,</p>
                                <p>Dr Olga Vuksanović,</p>
                                <p>Dr Anica Đurišić,</p>
                                <p>Doc. dr Marija Antunović.</p>
                            </div>

                            <div style={{marginBottom:'25px'}}>
                                <p style={{fontWeight:'bold'}}>Organizacioni odbor za pripremu i održavanje IV Kongresa stomatologa Crne Gore sa međunarodnim učešćem:</p>
                                <p>Dr Miradin Lolović - predjsednik,</p>
                                <p>Spec. dr Vladimir V. Jovetić,</p>
                                <p>Dr Jelena Bulajić,</p>
                                <p>Dr Nataša Međedović,</p>
                                <p>Spec. dr Nikoleta Mušura Vujović,</p>
                                <p>Dr Uroš Tomašrvić,</p>
                                <p>Dr Ivana Peranović,</p>
                                <p>Dr Anica Đurišić,</p>
                                <p>Dr Amar Nokić.</p>
                            </div>

                            <div style={{marginBottom:'25px'}}>
                                <p style={{fontWeight:'bold'}}>Komisija za etička pitanja:</p>
                                <p>Dr Marina Čogurić - predsjednica,</p>
                                <p>Dr Drago Žujović - zamjenik predsjednice,</p>
                                <p>Dr Maja Terzić,</p>
                                <p>Dr Zorka Vasković.</p>
                            </div>

                            <div style={{marginBottom:'25px'}}>
                                <p style={{fontWeight:'bold'}}>Komisija za stručna pitanja:</p>
                                <p>Prof. dr Jasminka Anđelić - predsjednica,</p>
                                <p>Spec. dr Jovan Vujović,</p>
                                <p>Spec. dr Nikoleta Mušura Vujović,</p>
                                <p>Dr Milica Sinanović,</p>
                                <p>Spec. dr Aleksandar Kostić.</p>
                            </div>

                            <div style={{marginBottom:'25px'}}>
                                <p style={{fontWeight:'bold'}}>Komisija za kontinuiranu edukaciju:</p>
                                <p>Doc. dr Marija Antunović - predsjednica,</p>
                                <p>Spec. dr Milinko Labović,</p>
                                <p>Spec. dr Tamara Bošković - Brkanović,</p>
                                <p>Dr sci. stom. Biljana Milošević,</p>
                                <p>Dr Vesna Kisić.</p>
                            </div>

                            <div style={{marginBottom:'25px'}}>
                                <p style={{fontWeight:'bold'}}>Komisija za izdavačku djelatnost:</p>
                                <p>Dr Milica Radulović - predsjednica,</p>
                                <p>Dr Mirjana Joksimović,</p>
                                <p>Dr Jovana Radonjić,</p>
                                <p>Dr Sanja Debelja,</p>
                                <p>Dr Nikola Baćović.</p>
                            </div>

                            <div style={{marginBottom:'25px'}}>
                                <p style={{fontWeight:'bold'}}>Sud Stomatološke komore Crne Gore:</p>
                                <p>Dr Jovan Burić - predsjednik,</p>
                                <p>Dr Tanja Radulović,</p>
                                <p>Spec. dr Ljiljana Mijušković.</p>
                            </div>

                            <div style={{marginBottom:'25px'}}>
                                <p style={{fontWeight:'bold'}}>Branioc Stomatološke komore Crne Gore:</p>
                                <p>Dr Radovan Vušović.</p>
                            </div>

                            <div style={{marginBottom:'25px'}}>
                                <p style={{fontWeight:'bold'}}>Tužioc Stomatološke komore Crne Gore:</p>
                                <p>Dr Danijela Ćaćić.</p>
                            </div>

                            <div style={{marginBottom:'25px'}}>
                                <p style={{fontWeight:'bold'}}>Radna grupa za izradu smjernica za izradu Strategije razvoja zdravstva Crne Gore za period od 2023-2027. godine sa akcionim planom za period od 2023-2024. godine:</p>
                                <p>Spec. dr Vladimir V. Jovetić,</p>
                                <p>Dr Nedžad Drešević,</p>
                                <p>Spec. dr Jovan Vujović,</p>
                                <p>Spec dr. Aleksandar Kostić,</p>
                                <p>Spec. dr Ranko Mugoša,</p>
                                <p>Dr Veselin Miladinović,</p>
                                <p>Spec. dr Anđelka Duborija,</p>
                                <p>Dr Maja Terzić,</p>
                                <p>Dr Boris Ražnatović,</p>
                                <p>Dr Amar Nokić,</p>
                                <p>Doc. dr Marija Antunović,</p>
                                <p>Dr Jelena Bulajić. </p>
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
                                            <span className="data-progress">Nikšić, Šavnik i Plužine</span>
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
                                            <span className="data-progress">Rožaje, Plav, Gusinje</span>
                                        </div>
                                    </div>
                                    <div className="progress type3">
                                        <div className="progress-bar" role="progressbar" data-value-progress="3">
                                            <span className="value-progress">00</span>
                                            <span className="data-progress">Pljevlja i Žabljak</span>
                                        </div>
                                    </div>
                                    <div className="progress type3">
                                        <div className="progress-bar" role="progressbar" data-value-progress="3">
                                            <span className="value-progress">00</span>
                                            <span className="data-progress">Mojkovac, Kolašin</span>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            
                            {/* <div className="col-md-4">
                                <div className="title-head pull-right">
                                    <h3>Skupština komore</h3>
                                </div>
                                <p> */}
                                    {/* {this.state.parliamentContent} */}
                                    {/* Izbor članova skupštine je u toku...
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
                                        Izbor članova skupštine po regijama je u toku...
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
                                    <p>Nikšić</p>
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