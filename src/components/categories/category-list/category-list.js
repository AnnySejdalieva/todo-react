import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import CategoryItem from "../category-item/category-item";
class CategoryList extends PureComponent {

    render() {
        let newArr = this.props.categories
            .filter(i => i.parent === this.props.categoryParent)
            return(
                <ul className="list-group list-group-flush">
                    {
                        newArr.map((item,i) => <CategoryItem categories={this.props.categories} key={i} item={item}/>)
                    }
                </ul>
            )

    }
}

const mapStateToProps = ({categories}) => {
    return { categories }
}

export default connect(mapStateToProps)(CategoryList)