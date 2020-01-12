import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import CategoryItem from "../category-item/category-item";
import PropTypes from "prop-types";

class CategoryList extends PureComponent {
    render() {
        let newArr = this.props.categories
            .filter(i => i.parent === 0)
            return(
                <ul className="list-group list-group-flush">
                    {
                        newArr.map((item,i) => <CategoryItem categories={this.props.categories} key={i} item={item}/>)
                    }
                </ul>
            )

    }
}

CategoryList.propTypes = {
    categoryParent: PropTypes.number,
    categories: PropTypes.array
}

const mapStateToProps = ({categories}) => {
    return { categories }
}

export default connect(mapStateToProps)(CategoryList)