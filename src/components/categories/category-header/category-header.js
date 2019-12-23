import React, { Component } from 'react'
import AddForm from "../../lib/add-form";
import {connect} from "react-redux";
import PropTypes from "prop-types";


class CategoryHeader extends Component{
    render() {
        return(
            <div className='CategoryHeader'>
                <AddForm placeholder={'Enter category title'} type={'category'} items={this.props.categories} parentCategory={0}/>
            </div>
        )
    }
}

CategoryHeader.propTypes = {
    categories: PropTypes.array
}

const mapStateToProps = ({categories}) => {
    return { categories }
}

export default connect(mapStateToProps)(CategoryHeader)