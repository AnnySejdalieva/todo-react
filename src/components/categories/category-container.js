import React from 'react'
import CategoryHeader from "./category-header";
import CategoryList from "./category-list";

const CategoryContainer = () => {

        return(
            <div className='category-container'>
                <div className="card bg-light mb-3">
                    <div className="card-header">
                        <CategoryHeader/>
                    </div>
                    <div>
                        <CategoryList/>
                    </div>
                </div>
            </div>
        )
}

export default CategoryContainer