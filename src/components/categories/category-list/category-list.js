import React, { Component } from 'react'
import { connect } from 'react-redux'
import CategoryItem from "../category-item/category-item";

class CategoryList extends Component {
    state = {

    }
    render() {
        let categories = this.props.categories.filter((el)=> el.parent === null)
        console.log(categories)
        return(
            <ul className="list-group list-group-flush">
                {
                    this.props.categories
                        .filter(i => i.parent === null)
                        .map(i => <CategoryItem categories={this.props.categories} item={i}/>)
                }
            </ul>
        )
    }
}

const mapStateToProps = ({categories}) => {
    return { categories }
}

export default connect(mapStateToProps)(CategoryList)