import React from 'react';
import { withRouter } from 'react-router-dom';
import PageHeader from './singleComponents/PageHeader';

class Structure extends React.Component {
  state = { showing: false };
    render() {
		const { showing } = this.state;
        return (
            <div>
                <PageHeader />
                <div className="contain-wrapp padding-bot50">	
		            <div className="container">
			            <div className="row">
                            <div className="col-md-10 col-sm-9" >
                                    <div className="recent-widget">
                                        <article className="row election-row">
                                            <div className="col-md-12">
                                                <font style={{'fontSize':'18px', 'paddingBottom':'5px'}}>Organi komore</font>
												
												<dt><li style={{'fontSize':'16px', 'color':'rgb(239, 102, 107)'}} onClick={() => this.setState({ showing: !showing })}>Skupština komore</li></dt>
												<div id="skupstina" style={{ display: (showing ? 'block' : 'none') }}>
												
												<dl>
												<dd><li style={{'fontSize':'14px', 'color':'rgb(239, 102, 107)'}}><a href="cdn/clanoviskupstine.docx">Članovi Skupštine</a></li></dd>
												<dd><li style={{'fontSize':'14px', 'color':'rgb(239, 102, 107)'}}><a href="cdn/nadleznosti.docx">Nadležnosti Skupštine</a></li></dd>
												<dd><li style={{'fontSize':'14px', 'color':'rgb(239, 102, 107)'}}>Sjednice Skupštine:</li></dd>
												<dd><li style={{'fontSize':'14px', 'color':'rgb(239, 102, 107)'}}><a href="cdn/zapisnikI.pdf">- Zapisnik sa konstitutivne sjednice</a></li></dd>
												<dd><li style={{'fontSize':'14px', 'color':'rgb(239, 102, 107)'}}><a href="cdn/zapisnikII.pdf">- Zapisnik sa II sjednice</a></li></dd>
												<dd><li style={{'fontSize':'14px', 'color':'rgb(239, 102, 107)'}}><a href="cdn/zapisnikIII.pdf">- Zapisnik sa III sjednice</a></li></dd>
												<dd><li style={{'fontSize':'14px', 'color':'rgb(239, 102, 107)'}}><a href="cdn/elektronska.docx">- Zapisnik elektronske sjednice</a></li></dd>
												<div className="recent-widget">
                                            <img src="img/skupstina.jpeg" alt="skupstina slika" style={{'width':'50%'}}/>
                                        </div>
												</dl>
												</div>
                                                <li style={{'fontSize':'16px', 'color':'rgb(239, 102, 107)'}}>Predsjednik komore</li>
                                                <li style={{'fontSize':'16px', 'color':'rgb(239, 102, 107)'}}>Izvršni odbor komore </li>
                                                <li style={{'fontSize':'16px', 'color':'rgb(239, 102, 107)'}}>Sud komore</li>
                                                <li style={{'fontSize':'16px', 'color':'rgb(239, 102, 107)'}}>Tužilac</li>
                                                <li style={{'fontSize':'16px', 'color':'rgb(239, 102, 107)'}}>Nadzorni odbor za finansijsko poslovanje komore</li>
                                                <li style={{'fontSize':'16px', 'color':'rgb(239, 102, 107)'}}>Stalne komisije komore</li>
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

export default withRouter(Structure)