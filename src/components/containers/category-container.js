import React from 'react'
import CategoryHeader from "../categories/category-header/category-header";
import CategoryList from "../categories/category-list/category-list";

const CategoryContainer = () => {

        return(
            <div className='category-container'>
                <div className="card bg-light mb-3">
                    <div className="card-header">
                        <CategoryHeader/>
                    </div>
                    <div>
                        <CategoryList categoryParent={null}/>
                    </div>
                </div>
            </div>
        )
}

export default CategoryContainer