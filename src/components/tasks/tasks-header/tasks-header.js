import React, { Component } from 'react'
import './tasks-header.css'
import { showOnlyDone } from '../../../store/action'
import { connect } from 'react-redux'
import AddForm from "../../lib/add-form";
import PropTypes from "prop-types";
import Search from "../../lib/search/search";

class TasksHeader extends Component{
    constructor(props) {
        super(props)
        this.state={
            showDone: false
        }
        this.changeInputShowDone=this.changeInputShowDone.bind(this)
    }
    componentDidMount() {
        if(typeof this.props.showDone !== 'undefined') {
            this.setState({ showDone: this.props.showDone})
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.showDone !== prevProps.showDone) {
            this.setState({showDone: this.props.showDone})
        }
    }

    changeInputShowDone () {
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
                <div>
                    <input className=""
                           onChange={e=>this.changeInputShowDone(e)}
                           checked={this.state.showDone}
                           type="checkbox" id="inlineFormCheck"/>
                    <label className="" htmlFor="inlineFormCheck">
                        Show done
                    </label>
                </div>
                <Search/>
                <AddForm placeholder={'Text input with button'} type={'task'} items={this.props.tasks}/>
            </div>
        </div>
    )
    }
}

TasksHeader.propTypes = {
    tasks: PropTypes.array,
    currentCategory: PropTypes.number,
    showDone: PropTypes.bool,
    showOnlyDone: PropTypes.func
}

const mapStateToProps = ({tasks, currentCategory, showDone}) => {
    return { tasks, currentCategory, showDone }
}

const mapDispatchToProps = {
    showOnlyDone
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksHeader)