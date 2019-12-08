import React, { Component } from 'react'
import RefactorIcon from "../../../svg/refactorIcon";
import DeleteIcon from "../../../svg/deleteIcon";
import AddItemIcon from "../../../svg/AddItemIcons";
import { connect } from 'react-redux';
import { updateItems } from "../../../store/action";
import './category-item.css'

class CategoryItem extends Component {
    componentDidMount() {

    }

    addCategory = () => {
        console.log('addItem')
    }
    render() {
        const { item, updateItems, categories } = this.props
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
                <ul className="list-group list-group-flush">
                    {
                        categories.map((category, i)=>{
                            if (category.parent === item.id) {
                                return <CategoryItem categories={categories} item={item} key={i} updateItems={this.props.updateItems}/>
                            }
                        })
                    }
                </ul>
            </li>
        )
    }

}

const mapStateToProps = ({items}) =>{
    return {
        items
    }
}

const mapDispatchToProps = {
    updateItems
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem)