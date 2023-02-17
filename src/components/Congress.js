import React from 'react'
import { withRouter } from 'react-router-dom'
import congress1 from '../assets/img/congress1.jpg'
import congress2 from '../assets/img/congress2.jpg'
import congress3 from '../assets/img/congress3.jpg'
import ImageUploader from 'react-images-upload'
import ReactLoading from 'react-loading';

class Congress extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            vocation: '',
            company: '',
            address: '',
            country: '',
            phone: '',
            email: '',
            addParticipansMsg: "",
            images: [],
            isLoading: false
        }
    }

    static getDerivedStateFromProps(nextProps, prevProps) {
        if(nextProps.addParticipansMsg !== prevProps.addParticipansMsg) {
            if(localStorage.getItem('prijava')) {
                localStorage.removeItem('prijava')
                return {
                    addParticipansMsg: nextProps.addParticipansMsg,
                    isLoading: false
                }
            }
        }
        if(nextProps.addParticipansMsg === "Uspjesna prijava!"){
            if(prevProps.addParticipansMsg === "Uspjesna prijava!") {
                if(!localStorage.getItem("prijava")) {
                    return {
                        addParticipansMsg: '',
                        isLoading: false
                    }
                }
            }
        }
        return null
    }

    changeName = (input) => {   
        this.setState({
            name: input.target.value
        })
    }
    changeVocation = (input) => {   
        this.setState({
            vocation: input.target.value
        })
    }
    changeCompany = (input) => {   
        this.setState({
            company: input.target.value
        })
    }
    changeAddress = (input) => {   
        this.setState({
            address: input.target.value
        })
    }
    changeCountry = (input) => {   
        this.setState({
            country: input.target.value
        })
    }
    changePhone = (input) => {   
        this.setState({
            phone: input.target.value
        })
    }
    changeEmail = (input) => {   
        this.setState({
            email: input.target.value
        })
    }

    resetFields = () => {
        this.setState({
            name: "",
            vocation: "",
            company: "",
            address: "",
            country: "",
            phone: "",
            email: "",
            addParticipansMsg: "",
            images: [],
        })
    }

    submitForm = (e) => {
        e.preventDefault()
        this.setState({isLoading: true})
        let member = {
            name: this.state.name,
            vocation: this.state.vocation,
            company: this.state.company,
            address: this.state.address,
            country: this.state.country,
            phone: this.state.phone,
            email: this.state.email,
            paid: 0,
            images: this.state.images[0]
        }

        this.props.addParticipans(member)
        this.resetFields()
    }

    onDrop = (images) => {
        this.setState({
            // images: this.state.images.concat(images)
            images: images
        })
    }

    render() {
        return( 
            <>
                {this.state.addParticipansMsg === "Uspjesna prijava!" ? alert(this.state.addParticipansMsg): ""}

                {
                    this.state.isLoading
                    ?
                    <div style={{paddingLeft: '45%', paddingTop:'20px', paddingBottom:'20px'}}>
                        <ReactLoading type='spin' color='red'/>
                        <p style={{marginLeft:'-20px', paddingTop:'10px', paddingBottom:'10px'}}>Molimo sačekajte!</p>
                    </div>
                    :
                    <>


                    <div style={{marginLeft: '-15px'}}>
                        <img className="col-xs-12 col-md-12 img-responsive text-center showPages" src={congress1} alt="img1" onClick={this.showCongressPage} title="Kongres"/>
                    </div>

                    <div className="container">
                        <div className="row" style={{paddingLeft:'5px'}}>
                            <div className="row" style={{paddingLeft:'5px', paddingRight:'5px'}}>
                                <div className="col-md-10 col-md-offset-1" style={{paddingTop:'10px'}}>
                                    <p style={{paddingBottom: '10px'}}>IV Konges stomatologa Crne Gore sa međunarodnim učešćem održaće se u hotelu "Splendid", Budva od 27. do 29. aprila 2023. godine pod sloganom "IZAZOVI SAVREMENE STOMATOLOGIJE".</p>
                                    <p style={{paddingBottom: '10px'}}>Kongres organizuje Stomatološka komora Crne Gore u saradnji sa Medicinskim fakultetom.</p>
                                    <p style={{paddingBottom: '10px'}}>Program IV Kongresa obuhvatiće aktuelne teme iz oblasti stomatologije sa kojima se doktori stomatologije i pacijenti svakodnevno susreću.</p>
                                    <p style={{paddingBottom: '10px'}}>Program obuhvata bogata i raznovrsna predavanja po pozivu eminentnih stručnjaka iz zemlje i inostranstva.</p>
                                    <p style={{paddingBottom: '10px'}}>Stomatološka komora Crne Gore će, kao i do sada, uz popularnu cijenu kotizacije obezbijediti visok stručni i naučni nivo Kongresa.</p>
                                                                
                                    <p style={{fontWeight:'bold', fontStyle: 'italic'}}>Rana kotizacija do 01.04.2023.godine:</p>
                                    <ul style={{padding:'10px'}}>
                                        <li>Za članove Komore - 100,00€</li>
                                        <li>Učesnici koji nisu članovi Komore - 150,00€</li>
                                    </ul>
                                
                                    <p style={{fontWeight:'bold', fontStyle: 'italic'}}>Kasna kotizacija do 15.04.2023.godine:</p>
                                    <ul style={{paddingTop:'10px'}}>
                                        <li>Za članove Komore - 150,00€</li>
                                        <li>Učesnici koji nisu članovi Komore - 200,00€</li>
                                    </ul>
                                    <p style={{fontWeight:'bold', fontStyle: 'italic'}}>Za studendte Kongres je besplatan.</p>

                                    <div style={{paddingTop:'10px'}}>
                                        <p>
                                            Uplate za kotizaciju možete izvršiti na 
                                            žiro račun : 510-200340-32 CKB Banka 
                                            IBAN : ME25510000000021117619
                                        </p>
                                        <p>Gotovinsko plaćanje prilikom registracije nije moguće.</p>
                                        <p>Pozivamo vas da i vi uzmete aktivno učešće prezentacijom naučnih radova i prikaza iz prakse i na taj način obogatite program edukacija.</p>
                                    </div>
                                    {/* Agenda */}
                                    <div style={{marginLeft:'15px', marginTop:'10px'}}>
                                        <p style={{fontWeight:'bold', fontStyle:'italic'}}>Agenda<a href="https://stomkomcg.me/cdn/28april.jpg" target="_blank"> prvi dan</a></p>
                                        {/* <img className="col-xs-12 col-md-12 img-responsive text-center showPages" src={congress3} alt="img1" onClick={this.showCongressPage} title="Kongres"/> */}
                                    </div>

                                    <div style={{marginLeft:'15px'}}>
                                        <p style={{fontWeight:'bold', fontStyle:'italic'}}>Agenda<a href="https://stomkomcg.me/cdn/29april.jpg" target="_blank"> drugi dan</a></p>
                                        {/* <img className="col-xs-12 col-md-12 img-responsive text-center showPages" src={congress3} alt="img1" onClick={this.showCongressPage} title="Kongres"/> */}
                                    </div>
                                    <div>
                                        <p style={{fontWeight:'bold', fontStyle:'italic', paddingTop:'15px', paddingBottom:'15px'}}>Takođe omogućeni su posebni uslovi boravka u hotelu. Prijave na <a href="https://secure.phobs.net/book.php?page=availability&companyid=54&hotelid=178&checkin=2023-04-26&checkout=2023-04-27&partnerid=15413&ibecurrency=EUR&crcid=136a7a34a8bcc54e988f76502b7c1a81">linku</a></p>
                                        <img className="col-xs-12 col-md-12 img-responsive text-center showPages" src={congress3} alt="img1" onClick={this.showCongressPage} title="Kongres"/>
                                    </div>




                                </div>
                            </div>

                            <div className="row">
                                {/* <div className='col-xs-6 col-xs-offset-3'>
                                    <p>Agenda:</p>
                                    <img className="col-xs-12 col-md-12 img-responsive text-center showPages" src={congress2} alt="img1" onClick={this.showCongressPage} title="Kongres"/>
                                </div> */}

                                <div className="col-sm-12 col-md-4 col-md-offset-4">
                                        {/* className="col-sm-5" */}
                                        <form name="addForm" style={{padding: '10px'}} onSubmit={this.submitForm}>
                                        {/* <div className="col-md-6"> */}
                                            <h4 className="box-title">Registracija</h4>
                                            <div className="box-body">
                                                <div className="form-group">
                                                    <label>Ime i prezime*</label>
                                                    <input minLength={7} maxLength={35} type="text" className="form-control" style={{borderRadius: '5px'}} placeholder="Unesite ime i prezime"  value={this.state.name} onChange={this.changeName} required />
                                                    <span style={{'color':'red'}}></span>
                                                </div>
                                                <div className="form-group">
                                                    <label>Zvanje (titula, specijalnost)*</label>
                                                    <input minLength={5} maxLength={35} type="text" className="form-control" style={{borderRadius: '5px'}} placeholder="Unesite zvanje"  value={this.state.vocation} onChange={this.changeVocation} required />
                                                    <span style={{'color':'red'}}></span>
                                                </div>
                                                <div className="form-group">
                                                    <label>Ustanova u kojoj radite*</label>
                                                    <input minLength={5} maxLength={35} type="text" className="form-control" style={{borderRadius: '5px'}} placeholder="Unesite naziv ustanove"  value={this.state.company} onChange={this.changeCompany} required />
                                                    <span style={{'color':'red'}}></span>
                                                </div>
                                                <div className="form-group">
                                                    <label>Adresa ustanove*</label>
                                                    <input minLength={5} maxLength={35} type="text" className="form-control" style={{borderRadius: '5px'}} placeholder="Unesite adresu ustanove"  value={this.state.address} onChange={this.changeAddress} required />
                                                    <span style={{'color':'red'}}></span>
                                                </div>
                                                <div className="form-group">
                                                    <label>Država*</label>
                                                    <input minLength={5} maxLength={35} type="text" className="form-control" style={{borderRadius: '5px'}} placeholder="Unesite naziv države"  value={this.state.country} onChange={this.changeCountry} required />
                                                    <span style={{'color':'red'}}></span>
                                                </div>
                                                <div className="form-group">
                                                    <label >Telefon*</label>
                                                    <input type="number" className="form-control" style={{borderRadius: '5px'}} placeholder="Unesite broj telefona"  value={this.state.phone} onChange={this.changePhone} required />
                                                    <span style={{'color':'red'}}></span>
                                                </div>
                                                <div className="form-group">
                                                    <label >E-mail*</label>
                                                    <input minLength={7} maxLength={35} type="email" className="form-control" style={{borderRadius: '5px'}} placeholder="Unesite email" value={this.state.email} onChange={this.changeEmail} required />
                                                    <span style={{'color':'red'}}></span>
                                                </div>
                                            </div>
                                    
                                            <div className="form-group">
                                                <label>Rad</label>
                                                <ImageUploader
                                                    // withPreview={true}
                                                    withPreview={this.state.images?.length > 0 ? true: false}
                                                    // withIcon={true}
                                                    buttonText='Odaberite'
                                                    onChange={this.onDrop}
                                                    imgExtension={['.jpg', '.gif', '.png', '.pdf', 'docx']}
                                                    maxFileSize={5242880}
                                                    singleImage={true}
                                                    label='Odaberite file za upload'
                                                    value={this.state.images}
                                                />
                                            </div>
                                            <div className="box-footer">
                                                <button type="submit" className="btn btn-default" style={{borderRadius:'5px', marginBottom: '10px', border: "0"}}>Pošalji</button>
                                            </div>
                                    </form>


                                </div>

                            </div>

                        </div>
                    </div>




                    </>
                }







                {/* <PageHeader /> */}
                {/* <div className="contain-wrapp gray-container paddingbot-clear"> */}
                    {/* <div style={{marginBottom: "30px", marginTop: "-15px"}}> */}


                {/* </div> */}







            </>
        )
    }
}

export default withRouter(Congress)