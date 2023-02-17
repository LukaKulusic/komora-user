import React from 'react'
import { withRouter } from 'react-router-dom'
import img03 from '../../assets/img/img03.jpg'

class Novelty extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            noveltyId: '',
            details: ''
        }
    }

    // componentDidMount() {
    //     const location = window.location.pathname;
    //     const lastSlashIndex = location.lastIndexOf('/') + 1;
    //     const id = location.substring(lastSlashIndex)
    //     console.log('did');
    // }


    static getDerivedStateFromProps(nextProps, prevProps) {
        // console.log('nextProps ', nextProps);
        // console.log('prevProps ', prevProps);
        // if(nextProps.id !== prevProps.noveltyId) {
        //     localStorage.setItem('novelty', nextProps.id)
        //     return {
        //         noveltyId: nextProps.id
        //     }
        // }
        if(nextProps.details !== prevProps.details) {
            return {
                details: nextProps.details,
                noveltyId: nextProps.id
            }
        }
        return null
    }

    detailsPage = () => {
        localStorage.setItem('novelty', this.state.noveltyId)
        let path = '/detaljnije/'+ this.state.noveltyId
        this.props.history.push(path)
    }

    render() {
        return(
            <article className="row post">
                <div className="col-md-12" style={{borderBottom: '1px solid lightgray', marginLeft: '20px', marginRight: '20px' }}>
                    {
                        this.props.imgTitle !== null
                        ?
                        <div style={{width: '60%', paddingBottom: '15px'}}>
                            <img src={`https://laravel.stomkomcg.me/`+this.props.imgTitle} className="img-responsive" alt="bilten1" style={{width:'95%', paddingTop: '10px'}}/>
                        </div>
                        : ""
                    }

                    <h5> {this.props.title} </h5>
                    <ul className="post-meta">
                        <li><i className="fa fa-calendar"></i> {this.props.date}</li>
                        <li><i className="fa fa-user"></i> {this.props.posted_by}</li>
                        <li><i className="fa fa-file-text"></i> {this.props.category_name}</li>
                    </ul>
                    {/* <p style={{paddingLeft:'15px'}}> */}
                        {
                          this.props.detailsPage? <div dangerouslySetInnerHTML={{__html:  this.props.full_text}}></div> :  this.props.content
                        }
                    {/* </p> */}

                    
                    {
                        this.props.detailsPage ? "" : <p><button onClick = { () => this.detailsPage()} 
                            className="btn btn-default" style={{border: 0, borderRadius: '5px', marginTop:'10px', padding: '10px', backgroundColor: "#EEEEEE", color:'black', marginBottom: '20px'}}>Detaljnije</button></p>
                    }
                </div>
        </article>
        )
    }
}

export default withRouter(Novelty)