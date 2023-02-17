import React from 'react'
import { withRouter } from 'react-router-dom'
import PageHeader from './singleComponents/PageHeader';
import NoveltyCnt from '../containers/NoveltyCnt';

class NoveltyDetails extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            details: []
        }
    }

    componentDidMount() {
        // this.props.getDetails(parseInt(this.props.novelty.id));
        this.props.getDetails(localStorage.getItem('novelty'));
    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState({
    //         details: nextProps.details
    //     })
    // }

    static getDerivedStateFromProps(nextProps, prevProps) {
        if(nextProps.details !== prevProps.details) {
            return {
                details: nextProps.details
            }
        }
        return null
    }

    render() {
        return(
            <div>
                <PageHeader />
                <div className="col-md-6 col-sm-6 col-sm-offset-3 pageDetailsPadding">
                {   
                    <NoveltyCnt 
                        key={this.state.details.id}
                        id={this.state.details.id}
                        title={this.state.details.title}
                        date={this.state.details.date}
                        posted_by={this.state.details.posted_by}
                        category_name={this.state.details.category_name}
                        full_text={this.state.details.full_text}
                        imgTitle={this.state.details.imgTitle}
                        detailsPage={true}
                    />
                }
                {
                    this.state.details.file?.length > 5 ?
                    // <p >Vijest mozete pogledati <a href={this.state.details.file}>ovdje</a></p>
                    <p style={{ paddingLeft: '20px' }}>Vijest možete pogledati <a href={`https://laravel.stomkomcg.me/${this.state.details.file}`} target="_blank">ovdje</a></p>
                    : ""
                }
                </div>
            </div>
        )
    }
}

export default withRouter(NoveltyDetails)