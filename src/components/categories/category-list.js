import React, { Component } from 'react'
import { connect } from 'react-redux'
import CategoryItem from "./category-item";

class CategoryList extends Component {
    state = {

    }
    render() {
        const { items } = this.props
        return(
            <ul className="list-group list-group-flush">
                <CategoryItem/>
            </ul>
        )
    }
}

const mapStateToProps = ({items}) => {
    return { items }
}

export default connect(mapStateToProps)(CategoryList)