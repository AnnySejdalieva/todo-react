import React from 'react'

const CategoryHeader = () => {
    return(
        <div className='CategoryHeader'>
            <form className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                    <input type="password" className="form-control" placeholder="Enter category title"/>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Add</button>
            </form>
        </div>
    )
}

export default CategoryHeader