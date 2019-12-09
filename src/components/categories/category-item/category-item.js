import React, { PureComponent } from 'react'
import RefactorIcon from "../../../svg/refactorIcon";
import DeleteIcon from "../../../svg/deleteIcon";
import AddItemIcon from "../../../svg/AddItemIcons";
import { connect } from 'react-redux';
import { updateItems } from "../../../store/action";
import './category-item.css'
import CategoryList from "../category-list/category-list";

class CategoryItem extends PureComponent {
    addCategory = () => {
        console.log('addItem')
    }
    constructListItem = () => {
        let newArr = this.props.categories
            .filter(i => i.parent === this.props.item.id)
        console.log(newArr)
        if (newArr.length > 0 && typeof newArr.length !== 'undefined') {
            return <CategoryList categoryParent={this.props.item.id}/>
        } else {
            return <div/>
        }
    }
    render() {
        const { item, updateItems } = this.props

        console.log(item)
        return(
            <li className="category-item">
                <div className='d-flex justify-content-between' onClick={()=>{updateItems(item.id)}}>
                    <div>{item.title}</div>
                    <div>
                        <RefactorIcon/>
                        <DeleteIcon/>
                        <AddItemIcon onClick={()=> {this.addCategory()}}/>
                    </div>
                </div>
                {this.constructListItem()}
            </li>
        )
    }
}

const mapDispatchToProps = {
    updateItems
};

export default connect(null, mapDispatchToProps)(CategoryItem)