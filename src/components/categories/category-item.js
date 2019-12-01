import React from 'react'
import RefactorIcon from "../../svg/refactorIcon";
import DeleteIcon from "../../svg/deleteIcon";
import AddItemIcon from "../../svg/AddItemIcons";

const CategoryItem = () => {
    return(
        <li className="list-group-item d-flex justify-content-between">
            <div></div>
            <div>
                <RefactorIcon/>
                <DeleteIcon/>
                <AddItemIcon/>
            </div>
        </li>
    )
}

export default CategoryItem