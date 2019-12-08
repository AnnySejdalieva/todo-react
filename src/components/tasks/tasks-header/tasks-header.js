import React, { Component } from 'react'
import CloseIcon from "../../../svg/closeIcon";
import './tasks-header.css'
import { addTaskToCurrentList } from '../../../store/action'
import { connect } from 'react-redux'

class TasksHeader extends Component{
    state = {
        textSearch: ''
    }
    onSearch(e) {
        this.setState({textSearch: e.target.value})
        this.props.addTaskToCurrentList(e.target.value)
    }
    render() {
        return (
        <div className='TasksHeader'>
            <form className="form-inline">
                <div className="form-check mb-2 mr-sm-2">
                    <input className="form-check-input" type="checkbox" id="inlineFormCheck"/>
                    <label className="form-check-label" htmlFor="inlineFormCheck">
                        Show done
                    </label>
                </div>
                <div className='form-control mb-2 mr-sm-2'>
                    <input type="text" className="TasksHeaderSearch"
                           placeholder="Search"/>
                    <CloseIcon className='TasksHeaderSearchIcon'/>
                </div>

                <input type="text" className="form-control mb-2 mr-sm-2"
                       placeholder="Text input with button"
                       onChange={(e)=> this.onSearch(e)}
                       value={this.state.textSearch} />
                <button type="submit" className="btn btn-primary mb-2">Add</button>
            </form>
        </div>
    )
    }


}

const mapDispatchToProps = {
    addTaskToCurrentList
}

export default connect(mapDispatchToProps)(TasksHeader)