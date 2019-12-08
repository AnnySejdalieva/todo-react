import React, { Component } from 'react'
import { connect } from 'react-redux'
import CategoryItem from "../category-item/category-item";

class CategoryList extends Component {
    state = {

    }
    render() {
        const { categories } = this.props
        return(
            <ul className="list-group list-group-flush">
                {
                    categories.map((category, i) => {
                        if(category.parent === null) {
                            return <CategoryItem categories={categories} key={i} item={category}/>
                        }
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = ({categories}) => {
    return { categories }
}

export default connect(mapStateToProps)(CategoryList)