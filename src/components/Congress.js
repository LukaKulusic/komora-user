import React from 'react'
import { withRouter } from 'react-router-dom'
import PageHeader from './singleComponents/PageHeader';
import { userPath } from '../constants/user.constants'

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
            addParticipansMsg: ""
        }
    }

    static getDerivedStateFromProps(nextProps, prevProps) {
        if(nextProps.addParticipansMsg !== prevProps.addParticipansMsg) {
            if(localStorage.getItem('prijava')) {
                localStorage.removeItem('prijava')
                return {
                    addParticipansMsg: nextProps.addParticipansMsg,
                }
            }
        }
        if(nextProps.addParticipansMsg === "Uspjesna prijava!"){
            if(prevProps.addParticipansMsg === "Uspjesna prijava!") {
                if(!localStorage.getItem("prijava")) {
                    return {
                        addParticipansMsg: '',
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
            addParticipansMsg: ""
        })
    }

    submitForm = (e) => {
        e.preventDefault()
        let member = {
            name: this.state.name,
            vocation: this.state.vocation,
            company: this.state.company,
            address: this.state.address,
            country: this.state.country,
            phone: this.state.phone,
            email: this.state.email,
            paid: 0
        }
        this.props.addParticipans(member)
        this.resetFields()
    }

    render() {
        return( 
            <div>
                {this.state.addParticipansMsg === "Uspjesna prijava!" ? alert(this.state.addParticipansMsg): ""}

                <PageHeader />
                <div className="contain-wrapp gray-container paddingbot-clear">
                    <div className="container">
                        {/* <div className="row box addMemberMargin"> */}
                        <div className="row">
                        {/* className="col-sm-5" */}
                            <form name="addForm" style={{padding: '10px'}} onSubmit={this.submitForm}>
                                {/* <div className="col-md-6"> */}

                                    <h4 className="box-title">Registracija</h4>
                                    <div className="box-body">
                                        <div className="form-group">
                                            <label>Ime i prezime</label>
                                            <input type="text" className="form-control" style={{borderRadius: '5px'}} placeholder="Unesite ime i prezime"  value={this.state.name} onChange={this.changeName} required />
                                            <span style={{'color':'red'}}></span>
                                        </div>
                                        <div className="form-group">
                                            <label>Zvanje (titula, specijalnost)</label>
                                            <input type="text" className="form-control" style={{borderRadius: '5px'}} placeholder="Unesite zvanje"  value={this.state.vocation} onChange={this.changeVocation} required />
                                            <span style={{'color':'red'}}></span>
                                        </div>
                                        <div className="form-group">
                                            <label>Ustanova u kojoj radite</label>
                                            <input type="text" className="form-control" style={{borderRadius: '5px'}} placeholder="Unesite naziv ustanove"  value={this.state.company} onChange={this.changeCompany} required />
                                            <span style={{'color':'red'}}></span>
                                        </div>
                                        <div className="form-group">
                                            <label>Adresa ustanove</label>
                                            <input type="text" className="form-control" style={{borderRadius: '5px'}} placeholder="Unesite adresu ustanove"  value={this.state.address} onChange={this.changeAddress} required />
                                            <span style={{'color':'red'}}></span>
                                        </div>
                                        <div className="form-group">
                                            <label>Država</label>
                                            <input type="text" className="form-control" style={{borderRadius: '5px'}} placeholder="Unesite naziv države"  value={this.state.country} onChange={this.changeCountry} required />
                                            <span style={{'color':'red'}}></span>
                                        </div>
                                        <div className="form-group">
                                            <label >Telefon</label>
                                            <input type="number" className="form-control" style={{borderRadius: '5px'}} placeholder="Unesite broj telefona"  value={this.state.phone} onChange={this.changePhone} required />
                                            <span style={{'color':'red'}}></span>
                                        </div>
                                        <div className="form-group">
                                            <label >E-mail</label>
                                            <input type="email" className="form-control" style={{borderRadius: '5px'}} placeholder="Unesite email" value={this.state.email} onChange={this.changeEmail} required />
                                            <span style={{'color':'red'}}></span>
                                        </div>
                                    </div>

                                    <div className="box-footer">
                                        <button type="submit" className="btn btn-default" style={{borderRadius:'5px', marginBottom: '10px', border: "0"}}>Pošalji</button>
                                    </div>
                                {/* </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Congress)