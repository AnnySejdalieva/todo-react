import React, { Component } from "react";
import PropTypes from "prop-types";
import { changeSearch } from "../../../store/action";
import './search.css'
import { connect } from "react-redux";
import SearchInput from 'react-search-input'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ''
        }
        this.onChangeInp=this.onChangeInp.bind(this)
    }

    onChangeInp (term) {
            this.setState({
                searchTerm: term
            })
            this.props.changeSearch(term)
    }
    render() {

        return (
            <div className='Search'>
                <SearchInput className="search-input" onChange={this.onChangeInp} />
            </div>
        )
    }
}
Search.propTypes = {
    search: PropTypes.string,
    changeSearch: PropTypes.func,
}

const mapStateToProps = ({search}) => {
    return { search }
}

const mapDispatchToProps = {
    changeSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)