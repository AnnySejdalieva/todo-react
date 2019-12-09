import React, { Component } from 'react'
import CloseIcon from "../../../svg/closeIcon";
import './tasks-header.css'
import { showOnlyDone } from '../../../store/action'
import { connect } from 'react-redux'
import AddForm from "../../lib/addForm";

class TasksHeader extends Component{
    state={
        showDone: false
    }
    componentDidMount() {
        if(typeof this.props.showDone !== 'undefined') {
            this.setState({ showDone: this.props.showDone})
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.showDone !== prevProps.showDone) {
            this.setState({showDone: this.props.showDone})
        }
    }

    changeInputShowDone = (e) => {
        let flag = this.state.showDone;
        this.setState( {
            showDone:!flag
        })
        this.props.showOnlyDone()
    }
    render() {
        return (
        <div className='TasksHeader'>
            <div className="d-flex">
                <div className="form-check mb-2 mr-sm-2">
                    <input className="form-check-input"
                           onChange={e=>this.changeInputShowDone(e)}
                           checked={this.state.showDone}
                           type="checkbox" id="inlineFormCheck"/>
                    <label className="form-check-label" htmlFor="inlineFormCheck">
                        Show done
                    </label>
                </div>
                <div className='form-control mb-2 mr-sm-2 TasksHeaderSearch'>
                    <input type="text"
                           placeholder="Search"/>
                    <div className='TasksHeaderSearchIcon'>
                        <CloseIcon/>
                    </div>
                </div>
                <AddForm placeholder={'Text input with button'} type={'task'} items={this.props.tasks}/>
            </div>

        </div>
    )
    }
}

const mapStateToProps = ({tasks, currentCategory, showDone}) => {
    return { tasks, currentCategory, showDone }
}

const mapDispatchToProps = {
    showOnlyDone
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksHeader)