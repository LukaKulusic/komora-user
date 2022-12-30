import React from 'react'
import {NavLink} from 'react-router-dom'

export default class PopularNews extends React.Component {
    
    render() {
        return (
            <div className="post">
                <a href="#1" className="post-thumbnail"><img src="img/new003.png" className="testimo-avatar" alt="" /></a>
                <h6>
                    <NavLink to={`/detaljnije/${this.props.id}`}>{this.props.title}</NavLink>
                </h6>
            </div>
        )
    }
}