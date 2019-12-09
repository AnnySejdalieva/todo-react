import React, { Component } from 'react'
import AddForm from "../../lib/addForm";
import {connect} from "react-redux";

class CategoryHeader extends Component{
    render() {
        return(
            <div className='CategoryHeader'>
                <AddForm placeholder={'Enter category title'} type={'category'} items={this.props.categories} parentCategory={null}/>
            </div>
        )
    }
}


const mapStateToProps = ({categories}) => {
    return { categories }
}

export default connect(mapStateToProps)(CategoryHeader)