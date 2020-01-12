import React, { PureComponent } from 'react'
import RefactorIcon from "../../../svg/refactorIcon";
import DeleteIcon from "../../../svg/deleteIcon";
import AddItemIcon from "../../../svg/AddItemIcons";
import { connect } from 'react-redux';
import { updateItems, changeCategory, addCategory, deleteCategory, changeModal } from "../../../store/action";
import './category-item.css'
import PropTypes from "prop-types";

class CategoryItem extends PureComponent {
    constructor(props) {
        super(props)
        this.addCategory=this.addCategory.bind(this)
    }
    componentDidMount() {
        let arr = this.props.categories.filter(el=>el.parent === this.props.item.id)
        this.setState({child: [...arr]})
    }

    addCategory () {
        let keys = []
        this.props.categories.map((el)=>keys.push(el.id))
        let id = Math.max(...keys)
        let bros = this.props.categories.filter((i)=> i.parent === this.props.item.id)

        this.props.addCategory({id: ++id, parent:this.props.item.id, title:this.props.item.title+' '+(bros.length+1)})
    }

    render() {
        const { item, updateItems, deleteCategory, changeModal, categories, addCategory } = this.props
        let arr = categories.filter(el=>el.parent === item.id)
        return(
            <li className="category-item">
                <div>
                    <div className='d-flex justify-content-between'>
                        <div onClick={()=>{updateItems(item.id)}}>{item.title}</div>
                        <div className='d-flex'>
                            <div onClick={() => {changeModal(item)}}>
                                <RefactorIcon />
                            </div>
                            <div onClick={() => deleteCategory(item.id)}>
                                <DeleteIcon/>
                            </div>
                            <div onClick={()=> {this.addCategory()}}>
                                <AddItemIcon/>
                            </div>
                        </div>
                    </div>

                </div>
                {
                    arr.length !== 0 ?
                    <ul className="list-group list-group-flush">
                        {
                            arr.map((item,i) => <CategoryItem
                                updateItems={updateItems}
                                deleteCategory={deleteCategory}
                                changeModal={changeModal}
                                addCategory={addCategory}
                                categories={categories}
                                key={i} item={item}/>)
                        }
                    </ul>:<></>
                }
            </li>
        )
    }
}

CategoryItem.propTypes = {
    item: PropTypes.object,
    changeModal: PropTypes.func,
    modal: PropTypes.object,
    updateItems: PropTypes.func,
    deleteCategory: PropTypes.func,
    addCategory: PropTypes.func,
    changeCategory: PropTypes.func,
    categories: PropTypes.array
}

const mapDispatchToProps = {
    updateItems,
    changeCategory,
    changeModal,
    addCategory,
    deleteCategory
};

export default connect(null, mapDispatchToProps)(CategoryItem)