import React from 'react'
import { withRouter } from 'react-router-dom'
import Member from './singleComponents/Member'
import PageHeader from './singleComponents/PageHeader'
import Select from 'react-select'
import Pagination from 'react-js-pagination'

class Members extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            members: [],
            // cities: [],
            data: [],
            sort: {
                column: null,
                direction: 'desc',
            },
            activePage: 1,
            usersPerPage: 20,
            numberOfPagButton: 5,
            totalMembers: 0,
            searchField: false,
            temporaryFiltered: [],
        }
    }

    componentDidMount() {
        this.setup()
    }

    setup = () => {
        this.props.getMembers()
        // this.props.getCities()
    }

    static getDerivedStateFromProps(nextProps, prevProps) {
        let _pagMembers = []
        if (nextProps.members !== prevProps.members) {
            if (nextProps.members !== undefined) {
                if (nextProps.members.length > 0) {
                    _pagMembers = nextProps.members.slice(
                        prevProps.activePage * prevProps.usersPerPage -
                            prevProps.usersPerPage,
                        prevProps.activePage * prevProps.usersPerPage,
                        []
                    )
                    return {
                        members: nextProps.members,
                        data: _pagMembers,
                        totalMembers: nextProps.members.length,
                    }
                }
            } 
        }

        if (prevProps.members.length > 0 && nextProps.members.length === 0) {
            return {
                members: nextProps.members,
                data: nextProps.members,
                totalMembers: nextProps.members.length,
            }
        }

        // if (nextProps.cities !== prevProps.cities) {
        //     return {
        //         cities: nextProps.cities,
        //     }
        // }
        return null
    }

    search = (input) => {
        let searchF
        let filteredMembers = this.props.members
    let temporaryCount = this.props.members.length
    let _temporaryFiltered
    let _temporaryNumberOfPages
        if (input.target.value.length > 0) {
            if (input.target.value.match(/[A-Za-z]/)) {
                searchF = true
                filteredMembers = filteredMembers.filter((item) => {
                    return (
                        item.name
                            .toLowerCase()
                            .search(input.target.value.toLowerCase()) !== -1
                    )
                })
                _temporaryFiltered = filteredMembers
                _temporaryNumberOfPages = Math.round(
                    filteredMembers.length / this.state.usersPerPage
                )
            }
        } else {
            searchF = false
            filteredMembers = this.props.members
            temporaryCount = filteredMembers.length
        }

        this.setState({
            data: filteredMembers.slice(
                this.state.activePage * this.state.usersPerPage -
                    this.state.usersPerPage,
                this.state.activePage * this.state.usersPerPage,
                []
            ),
            totalMembers: temporaryCount,
            searchField: searchF,
            temporaryFiltered: _temporaryFiltered,
            numberOfPagButton: _temporaryNumberOfPages !== 0 ? _temporaryNumberOfPages : 1,
        })
    }

    setActivePage = (currentPage) => {
        let pagMembers
        if (this.state.searchField === false) {
            pagMembers = this.props.members
        } else {
            pagMembers = this.state.temporaryFiltered
        }
        this.setState({
            activePage: currentPage,
            data: pagMembers.slice(
                currentPage * this.state.usersPerPage - this.state.usersPerPage,
                currentPage * this.state.usersPerPage,
                []
            ),
        })
    }

    onSort = (column) => (e) => {
        const direction = this.state.sort.column
            ? this.state.sort.direction === 'asc'
                ? 'desc'
                : 'asc'
            : 'desc'
        const data = this.state.members.sort((a, b) => {
            if (column === 'name') {
                const nameA = a.name.toUpperCase()
                const nameB = b.name.toUpperCase()
                if (nameA < nameB) {
                    return -1
                }
                if (nameA > nameB) {
                    return 1
                }
                return 0
            } else if (column === 'city') {
                const nameA = a.name.toUpperCase()
                const nameB = b.name.toUpperCase()
                if (nameA < nameB) {
                    return -1
                }
                if (nameA > nameB) {
                    return 1
                }
                return 0
            } else if (column === 'address') {
                const nameA = a.name.toUpperCase()
                const nameB = b.name.toUpperCase()
                if (nameA < nameB) {
                    return -1
                }
                if (nameA > nameB) {
                    return 1
                }
                return 0
            } else if (column === 'company') {
                const nameA = a.name.toUpperCase()
                const nameB = b.name.toUpperCase()
                if (nameA < nameB) {
                    return -1
                }
                if (nameA > nameB) {
                    return 1
                }
                return 0
            } else if (column === 'phone') {
                return b.id - a.id
            } else if (column === 'id') {
                return b.id - a.id
            }
        })
        if (direction === 'asc') {
            data.reverse()
        }
        this.setState({
            sort: {
                column: column,
                direction: direction,
            },
            // data: data
            data: data.slice(
                this.state.activePage * this.state.usersPerPage -
                    this.state.usersPerPage,
                this.state.activePage * this.state.usersPerPage,
                []
            ),
            totalMembers: data.length,
        })
    }

    changeRowsNumber = (number) => {
        this.setState({
            usersPerPage: number,
        })
    }

    changeCity = (input) => {
        console.log(input)
        this.setState({
            city: input
        })

        //call api for members per city
        this.props.getMembersPerCity(input.value)
    }

    render() {
        const options = [
            {
                "value": 1,
                "label": "Andrijevica"
            },
            {
                "value": 2,
                "label": "Bar"
            },
            {
                "value": 3,
                "label": "Berane"
            },
            {
                "value": 4,
                "label": "Bijelo Polje"
            },
            {
                "value": 5,
                "label": "Budva"
            },
            {
                "value": 6,
                "label": "Cetinje"
            },
            {
                "value": 7,
                "label": "Danilovgrad"
            },
            {
                "value": 8,
                "label": "Gusinje"
            },
            {
                "value": 9,
                "label": "Herceg Novi"
            },
            {
                "value": 10,
                "label": "Kolašin"
            },
            {
                "value": 11,
                "label": "Kotor"
            },
            {
                "value": 12,
                "label": "Mojkovac"
            },
            {
                "value": 13,
                "label": "Nikšić"
            },
            {
                "value": 14,
                "label": "Petnjica"
            },
            {
                "value": 15,
                "label": "Plav"
            },
            {
                "value": 16,
                "label": "Plužine"
            },
            {
                "value": 17,
                "label": "Pljevlja"
            },
            {
                "value": 18,
                "label": "Podgorica"
            },
            {
                "value": 19,
                "label": "Rožaje"
            },
            {
                "value": 20,
                "label": "Šavnik"
            },
            {
                "value": 21,
                "label": "Tivat"
            },
            {
                "value": 22,
                "label": "Tuzi"
            },
            {
                "value": 23,
                "label": "Ulcinj"
            },
            {
                "value": 24,
                "label": "Zeta"
            },
            {
                "value": 25,
                "label": "Žabljak"
            }
        ]
        
        return (
            <div>
                <PageHeader />
                <div className="container">
                    <div className="row">
                        <div
                            className="membersPading"
                            style={{ width: '100%' }}
                        >
                            <div
                                className="col-sm-4"
                                style={{ paddingBottom: '5px' }}
                            >
                                <Select
                                    options={options}
                                    placeholder="Izaberite grad"
                                    value={this.state.city}
                                    onChange={this.changeCity}
                                />
                            </div>
                            <div className="col-sm-4"></div>

                            <div className="col-sm-4">
                                <input
                                    type="text"
                                    className="searchField"
                                    onChange={this.search}
                                    placeholder="Pretraga"
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 box">
                            <table id="example" className="table table-hover">
                                <thead>
                                    <tr>
                                        <th
                                            className="membersBorder"
                                            onClick={this.onSort('id')}
                                        >
                                            <span className="fa fa-sort"></span>
                                            ID
                                        </th>
                                        <th
                                            className="membersBorder"
                                            onClick={this.onSort('name')}
                                        >
                                            <span className="fa fa-sort"></span>
                                            Ime i prezime
                                        </th>
                                        <th
                                            className="membersBorder"
                                            onClick={this.onSort('city')}
                                        >
                                            <span className="fa fa-sort"></span>
                                            Grad
                                        </th>
                                        <th
                                            className="membersBorder"
                                            onClick={this.onSort('address')}
                                        >
                                            <span className="fa fa-sort"></span>
                                            Adresa
                                        </th>
                                        <th
                                            className="membersBorder"
                                            onClick={this.onSort('company')}
                                        >
                                            <span className="fa fa-sort"></span>
                                            Ustanova
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.data.map((member) => {
                                        return (
                                            <Member
                                                key={member.id}
                                                id={member.id}
                                                name={member.name}
                                                city={member.city.name}
                                                address={member.address}
                                                company={member.company}
                                            />
                                        )
                                    })}
                                </tbody>
                            </table>

                            {/* PAGINATION */}

                            <Pagination
                                activePage={this.state.activePage}
                                itemsCountPerPage={this.state.usersPerPage}
                                totalItemsCount={this.state.totalMembers}
                                pageRangeDisplayed={
                                    this.state.numberOfPagButton
                                }
                                onChange={this.setActivePage}
                            />

                            {/* PAGINATION */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Members)
