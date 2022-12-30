import  React from 'react'
import { withRouter } from 'react-router-dom'
import PageHeader from '../components/singleComponents/PageHeader'
import Novelty from './singleComponents/Novelty';
import Category from './singleComponents/Category';
import Pagination from 'react-js-pagination'

class NewsForCategory extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            news: [],
            categories: [],
            activePage: 1,
            newsPerPage: 5,
            numberOfPagButton: 5,
            totalAdvs: 0,
            data: [],
            selectedCategory: ''
        }
    }

    componentDidMount() {
        this.setup()
    }

    // componentWillReceiveProps(nextProps) {
    //     let pagNews = []
    //     let category_id 
    //     let selCat 
    //     if(nextProps.categories.length > 0)  {
    //         category_id = parseInt(nextProps.category.id)
    //         selCat = nextProps.categories[category_id-1].name
    //     }
    //     if(nextProps.news.length > 0) {
    //         pagNews = nextProps.news.slice(this.state.activePage*this.state.newsPerPage - this.state.newsPerPage,
    //             this.state.activePage*this.state.newsPerPage, [])
    //     }
    //     this.setState({
    //         news: nextProps.news,
    //         categories: nextProps.categories,
    //         data: pagNews,
    //         totalAdvs: nextProps.news.length,
    //         selectedCategory: selCat
    //     })
    // }

    static getDerivedStateFromProps(nextProps, prevProps) {
        let pagNews = [], category_id, selCat
        if(nextProps.categories !== prevProps.categories) {
            category_id = parseInt(nextProps.category.id)
            if(nextProps.categories !== undefined) {
                if(nextProps.categories.length > 0) {
                    selCat = nextProps.categories[category_id-1].name
                }
            }
            pagNews = nextProps.news.slice(prevProps.activePage*prevProps.newsPerPage - prevProps.newsPerPage,
                prevProps.activePage*prevProps.newsPerPage, [])
        }
        if(nextProps.news !== prevProps.news) {
            pagNews = nextProps.news.slice(prevProps.activePage*prevProps.newsPerPage - prevProps.newsPerPage,
                prevProps.activePage*prevProps.newsPerPage, [])
        }
        return {
            news: nextProps.news,
            categories: nextProps.categories,
            data: pagNews,
            totalAdvs: nextProps.news.length,
            selectedCategory: selCat
        }
    }

    setActivePage = (currentPage) => {
        this.setState({
            activePage: currentPage,
            data: this.state.news.slice(currentPage*this.state.newsPerPage - this.state.newsPerPage,
                currentPage*this.state.newsPerPage, [])
        })
    }

    setup = () => {
        this.props.getNews(parseInt(this.props.category.id))
        this.props.getCategories()
    }

    render() {
        return (
            <div>
                <PageHeader />
                <div className="contain-wrapp padding-bot50" style={{marginTop: '30px'}}>	
		            <div className="container">
			            <div className="row">
                            {/* <div className="col-md-3 col-sm-3">
                                <aside>
                                    <div className="widget">
                                        <h5 className="widget-head">Kategorije</h5>
                                        <ul className="cat">
                                            {
                                                this.state.categories.map(category => {
                                                    return <Category 
                                                        key={category.id}
                                                        id={category.id}
                                                        name={category.name}                                                    
                                                        />
                                                })
                                            }
                                        </ul>
                                    </div>
                                </aside>
                            </div> */}
                            <div className="col-md-9 col-md-offset-3 col-sm-12">
                                <div className="newsForCat">
                                    <h5>Vijesti za kategoriju: {this.state.selectedCategory} </h5>
                                </div>

                            {
                                this.state.data.map(item => {
                                    return <Novelty 
                                                key={item.id}
                                                id={item.id}
                                                title={item.title}
                                                date={item.date}
                                                posted_by={item.posted_by}
                                                category_name={item.category_name}
                                                content={item.content}
                                                full_text={item.full_text}
                                                details_page={false}
                                            />
                                })
                            }
                            
                                <Pagination
                                    activePage={this.state.activePage}
                                    itemsCountPerPage={this.state.newsPerPage}
                                    totalItemsCount={this.state.totalAdvs}
                                    pageRangeDisplayed={this.state.numberOfPagButton}
                                    onChange={this.setActivePage}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default withRouter(NewsForCategory)