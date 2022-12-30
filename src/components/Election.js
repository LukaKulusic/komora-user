import React from 'react'
import { withRouter } from 'react-router-dom'
import PageHeader from './singleComponents/PageHeader';


class Election extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            popularNews: []
        }
    }


    render() {
        return (
            <div>
                <PageHeader />
                <div className="contain-wrapp padding-bot50">	
		            <div className="container">
			            <div className="row">
                            <div className="col-md-10 col-sm-9" >
                                    <div className="recent-widget">

                                        <article className="row election-row">
                                            <div className="col-md-12" style={{'paddingBottom':'0px'}}>
                                                <a href="http://stomkomcg.me/static/PokretanjePostupkaIzbora.pdf" style={{'fontSize':'16px'}}>Izbori za članove Skupštine Stomatološke komore Crne Gore</a>
                                            </div>
                                        </article>

                                         <article className="row election-row">
                                            <div className="col-md-12">
                                                <a href="https://stomkomcg.me/static/CCF_000008.pdf" style={{'fontSize':'16px'}}>Pravilnik o izboru i opozivu članova skupštine</a>
                                            </div>
                                        </article>
                                        <article className="row election-row">
                                            <div className="col-md-12">
                                                <a href="https://stomkomcg.me/izborifiles/poslovnik.pdf" style={{'fontSize':'16px'}}>Poslovnik o radu</a>
                                            </div>
                                        </article>
                                        <article className="row election-row">
                                            <div className="col-md-12">
                                                <a href="https://stomkomcg.me/izborifiles/obavjestenje.pdf" style={{'fontSize':'16px'}}>Obavještenje</a>
                                            </div>
                                        </article>
                                        <article className="row election-row">
                                            <div className="col-md-12">
                                                <a href="https://stomkomcg.me/izborifiles/pregled_aktivnosti.pdf" style={{'fontSize':'16px'}}>Pregled aktivnosti</a>
                                            </div>
                                        </article>
                                        
                                        <article className="row election-row">
                                            <div className="col-md-12">
                                                <a href="https://stomkomcg.me/izborifiles/poziv_za_predlaganje_kandidata.pdf" style={{'fontSize':'16px'}}>Poziv za predlaganje</a>
                                            </div>
                                        </article>


                                        <article className="row election-row">
                                            <div className="col-md-12">
                                                <a href="https://stomkomcg.me/izborifiles/odluka.pdf" style={{'fontSize':'16px'}}>Odluka o formiranju izbornih komisija</a>
                                            </div>
                                        </article>

                                        {/* <article className="row election-row">
                                            <div className="col-md-12">
                                                <font style={{'fontSize':'18px'}}><b>OBRASCI</b></font>
                                                <li><a href="https://stomkomcg.me/izborifiles/predlaganje_kandidata.pdf" style={{'fontSize':'16px'}}>Predlaganje kandidata</a></li>
                                                <li><a href="https://stomkomcg.me/izborifiles/saglasnost_predlozenog_kandidata.pdf" style={{'fontSize':'16px'}}>Saglasnost predloženog kandidata</a></li>
                                            </div>
                                        </article> */}

                                       

                                        
                                        <article className="row election-row">

                                        <div className="col-md-12">
                                                <font style={{'fontSize':'18px'}}><a style={{'fontWeight':'bold', 'color':'#787878'}} href="https://stomkomcg.me/izborifiles/glasanje/listak.pdf">Lista kandidata po podružnicama</a></font>
                                                <li><a href="https://stomkomcg.me/izborifiles/kandidati/podgorica.docx" style={{'fontSize':'16px'}}>Podgorica</a></li>
                                                <li><a href="https://stomkomcg.me/izborifiles/kandidati/dg.docx" style={{'fontSize':'16px'}}>Danilovgrad</a></li>
                                                <li><a href="https://stomkomcg.me/izborifiles/kandidati/niksic.docx" style={{'fontSize':'16px'}}>Nikšić, Šavnik i Plužine</a></li>
                                                <li><a href="https://stomkomcg.me/izborifiles/kandidati/cetinje.docx" style={{'fontSize':'16px'}}>Cetinje</a></li>
                                                <li><a href="https://stomkomcg.me/izborifiles/kandidati/bar.docx" style={{'fontSize':'16px'}}>Bar</a></li>
                                                <li><a href="https://stomkomcg.me/izborifiles/kandidati/budva.docx" style={{'fontSize':'16px'}}>Budva</a></li>
                                                <li><a href="https://stomkomcg.me/izborifiles/kandidati/hn.docx" style={{'fontSize':'16px'}}>Herceg Novi</a></li>
                                                <li><a href="https://stomkomcg.me/izborifiles/kandidati/kotor.docx" style={{'fontSize':'16px'}}>Kotor</a></li>
                                                <li><a href="https://stomkomcg.me/izborifiles/kandidati/tivat.docx" style={{'fontSize':'16px'}}>Tivat</a></li>
                                                <li><a href="https://stomkomcg.me/izborifiles/kandidati/ulcinj.docx" style={{'fontSize':'16px'}}>Ulcinj</a></li>
                                                <li><a href="https://stomkomcg.me/izborifiles/kandidati/bp.docx" style={{'fontSize':'16px'}}>Bijelo Polje</a></li>
                                                <li><a href="https://stomkomcg.me/izborifiles/kandidati/berane.docx" style={{'fontSize':'16px'}}>Berane, Petnjica i Andrijevica</a></li>
                                                <li><a href="https://stomkomcg.me/izborifiles/kandidati/rozaje.docx" style={{'fontSize':'16px'}}>Rožaje, Plav i Gusinje</a></li>
                                                <li><a href="https://stomkomcg.me/izborifiles/kandidati/pljevlja.docx" style={{'fontSize':'16px'}}>Pljevlja i Žabljak</a></li>
                                                <li><a href="https://stomkomcg.me/izborifiles/kandidati/mojkovac.docx" style={{'fontSize':'16px'}}>Mojkovac i Kolašin</a></li>
                                                
                                            </div>


                                            <div className="col-md-12">
                                                <font style={{'fontSize':'18px'}}><b>Glasanje</b></font>
                                                <li style={{'listStyleType': 'none'}}><a href="https://stomkomcg.me/izborifiles/glasanje/uputstvo.pdf" style={{'fontSize':'16px'}}>Uputstvo za rad Izbornih komisija </a></li>
                                                {/* <li style={{'listStyleType': 'none'}}><a href="https://stomkomcg.me/izborifiles/glasanje/odluke.pdf" style={{'fontSize':'16px'}}>Odluke Glavne izborne komisije</a></li> */}
                                            </div>
                                               
                                                
                                                
                                            <div className="col-md-12">
                                                    <font style={{'fontSize':'18px'}}><a style={{'fontWeight':'bold', 'color':'#787878'}} href="https://stomkomcg.me/izborifiles/obavejstenjebs.pdf">Obavještenje</a></font>
                                            </div>

                                            <div className="col-md-12">
                                                <font style={{'fontSize':'18px'}}><b>Birački spiskovi izbornih jedinica podružnica</b></font>
                                                <li><a href="https://stomkomcg.me/izborifiles/kandidati/bpodgorica.docx" style={{'fontSize':'16px'}}>Podgorica</a></li>
                                                <li><a href="https://stomkomcg.me/izborifiles/kandidati/bdg.docx" style={{'fontSize':'16px'}}>Danilovgrad</a></li>
                                                <li><a href="https://stomkomcg.me/izborifiles/kandidati/bniksic.docx" style={{'fontSize':'16px'}}>Nikšić, Šavnik i Plužine</a></li>
                                                <li><a href="https://stomkomcg.me/izborifiles/kandidati/bcetinje.docx" style={{'fontSize':'16px'}}>Cetinje</a></li>
                                                <li><a href="https://stomkomcg.me/izborifiles/kandidati/bbar.docx" style={{'fontSize':'16px'}}>Bar</a></li>
                                                <li><a href="https://stomkomcg.me/izborifiles/kandidati/bbudva.docx" style={{'fontSize':'16px'}}>Budva</a></li>
                                                <li><a href="https://stomkomcg.me/izborifiles/kandidati/bhn.docx" style={{'fontSize':'16px'}}>Herceg Novi</a></li>
                                                <li><a href="https://stomkomcg.me/izborifiles/kandidati/bkotor.docx" style={{'fontSize':'16px'}}>Kotor</a></li>
                                                <li><a href="https://stomkomcg.me/izborifiles/kandidati/btivat.docx" style={{'fontSize':'16px'}}>Tivat</a></li>
                                                <li><a href="https://stomkomcg.me/izborifiles/kandidati/bulcinj.docx" style={{'fontSize':'16px'}}>Ulcinj</a></li>
                                                <li><a href="https://stomkomcg.me/izborifiles/kandidati/bbp.docx" style={{'fontSize':'16px'}}>Bijelo Polje</a></li>
                                                <li><a href="https://stomkomcg.me/izborifiles/kandidati/bberane.docx" style={{'fontSize':'16px'}}>Berane, Petnjica i Andrijevica</a></li>
                                                <li><a href="https://stomkomcg.me/izborifiles/kandidati/brozaje.docx" style={{'fontSize':'16px'}}>Rožaje, Plav i Gusinje</a></li>
                                                <li><a href="https://stomkomcg.me/izborifiles/kandidati/bpljevlja.docx" style={{'fontSize':'16px'}}>Pljevlja i Žabljak</a></li>
                                                <li><a href="https://stomkomcg.me/izborifiles/kandidati/mojkovac.docx" style={{'fontSize':'16px'}}>Mojkovac i Kolašin</a></li>
                                            </div>
                                            

                                            <div className="col-md-12">
                                                <font style={{'fontSize':'18px'}}><b>Obrasci</b></font>
                                                <li><a href="https://stomkomcg.me/izborifiles/predlaganje_kandidata.pdf" style={{'fontSize':'16px'}}>Predlaganje kandidata</a></li>
                                                <li><a href="https://stomkomcg.me/izborifiles/saglasnost_predlozenog_kandidata.pdf" style={{'fontSize':'16px'}}>Saglasnost predloženog kandidata</a></li>
                                                {/* <li><a href="https://stomkomcg.me/izborifiles/zapisnici/gik.docx" style={{'fontSize':'16px'}}>Zapisnik o radu GIK</a></li>
                                                <li><a href="https://stomkomcg.me/izborifiles/zapisnici/zaporadu.docx" style={{'fontSize':'16px'}}>Zapisnik o radu Izborne komisije</a></li>
                                                <li><a href="https://stomkomcg.me/izborifiles/zapisnici/zapopr.docx" style={{'fontSize':'16px'}}>Zapisnik o primopredaji izbornog materijala</a></li> */}
                                            </div>

                                            <div className="col-md-12">
                                                <font style={{'fontSize':'18px'}}><a style={{'color':'#787878', 'fontWeight':'bold'}} href="https://stomkomcg.me/izborifiles/tehnicke.pdf">Tehničke preporuke za održavanje izbora u cilju epidemioloske zaštite</a></font>
                                            </div>

                                            {/* <div className="col-md-12">
                                                <font style={{'fontSize':'18px'}}><a style={{'color':'#787878', 'fontWeight':'bold'}} href="https://stomkomcg.me/izborifiles/rezultati.pdf">Rezultati izbora za članove Skupštine Stomatološke komore Crne Gore</a></font>
                                            </div> */}

                                        </article>
                                        

                                        
                                        <article className="row election-row">
                                            <div className="col-md-12">
                                                <font style={{'fontSize':'18px'}}><a style={{'color':'#787878', 'fontWeight':'bold'}} href="https://stomkomcg.me/izborifiles/rezultati.pdf">Rezultati izbora za članove Skupštine Stomatološke komore Crne Gore</a></font>

                                            </div>
                                        </article>

                                        <article className="row election-row">
                                            <div className="col-md-12">
                                                <font style={{'fontSize':'18px'}}><b>PONOVLJENI IZBORI U IZBORNIM JEDINICAMA PODRUŽNICA BAR, BIJELO POLJE I BERANE, PETNJICA I ANDRIJEVICA</b></font>
                                                <li><a href="https://stomkomcg.me/izborifiles/pozivZaPredlaganje.pdf" style={{'fontSize':'16px'}}>Poziv za predlaganje kandidata za članove Skupštine Stomatološke komore Crne Gore iz izbornih jedinica podružnica  Bar, Bijelo Polje i Berane, Petnjica i Andrijevica</a></li>
                                                <li><a href="https://stomkomcg.me/izborifiles/pregledAktivnosti.pdf" style={{'fontSize':'16px'}}>Pregled aktivnosti za vršenje izbornih radnji u postupku izbora za članove Skupštine Stomatološke komore Crne Gore iz izbornih jedinica podružnica  Bar, Bijelo Polje i Berane, Petnjica i Andrijevica</a></li>
                                                <li><a href="https://stomkomcg.me/izborifiles/brojMandata.pdf" style={{'fontSize':'16px'}}>Broj mandata i Izborne komisije za izborne jedinice podružnica  Bar, Bijelo Polje i Berane, Petnjica i Andrijevica</a></li>
                                                <li><font style={{'fontSize':'16px'}}><b>LISTA KANDIDADTA PO IZBORNIM JEDINICAMA PODRUŽNICA</b></font></li>
                                                <li style={{'marginLeft':'15px'}}><a href="https://stomkomcg.me/izborifiles/lsBar.pdf">Bar</a></li>
                                                <li style={{'marginLeft':'15px'}}><a href="https://stomkomcg.me/izborifiles/lsBp.pdf">Bijelo Polje</a></li>
                                                <li style={{'marginLeft':'15px'}}><a href="https://stomkomcg.me/izborifiles/lsSjever.pdf">Berane Petnjica i Andrijevica</a></li>

                                                <li><font style={{'fontSize':'16px'}}><b>BIRAČKI SPISKOVI PO IZBORNIM JEDINICAMA PODRUŽNICA</b></font></li>
                                                <li style={{'marginLeft':'15px'}}><a href="https://stomkomcg.me/izborifiles/lsBar.docx">Bar</a></li>
                                                <li style={{'marginLeft':'15px'}}><a href="https://stomkomcg.me/izborifiles/lsBp.docx">Bijelo Polje</a></li>
                                                <li style={{'marginLeft':'15px'}}><a href="https://stomkomcg.me/izborifiles/lsSjever.docx">Berane Petnjica i Andrijevica</a></li>

                                                <li><font style={{'fontSize':'16px'}}><a href="https://stomkomcg.me/izborifiles/ponovljeniIzboriSjever.pdf" style={{'color':'#787878'}}><b>Rezultati izbora za članove Skupštine Stomatološke komore Crne Gore iz izbornih jedinica podružnica Bar, Bijelo Polje i Berane, Petnjica i Andrijevica.</b></a></font></li>

                                                <font style={{'fontSize':'18px'}}><span style={{'color':'#787878', 'fontWeight':'bold'}} >U ovom izbornom postupku koristiće se obrasci za kandidaturu koji su istaknuti gore, pod naslovom "Obrasci"</span></font>
                                            </div>
                                        </article>
                                        
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default withRouter(Election)