import React, { Component } from 'react'
import RefactorIcon from "../../../svg/refactorIcon";
import DeleteIcon from "../../../svg/deleteIcon";
import AddItemIcon from "../../../svg/AddItemIcons";
import { connect } from 'react-redux';
import { updateItems } from "../../../store/action";


class CategoryItem extends Component {
    render() {

        const { item, updateItems } = this.props
        console.log(item, updateItems)
        return(
            <li className="list-group-item">
                <div className='d-flex justify-content-between' onClick={()=> {updateItems(item.items)}}>
                    <div>{item.title}</div>
                    <div>
                        <RefactorIcon/>
                        <DeleteIcon/>
                        <AddItemIcon/>
                    </div>
                </div>
                <ul className="list-group list-group-flush">
                    {
                        item.categories.map((item, i)=>{
                            console.log(item)
                            return <CategoryItem item={item} key={i} updateItems={this.props.updateItems}/>
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