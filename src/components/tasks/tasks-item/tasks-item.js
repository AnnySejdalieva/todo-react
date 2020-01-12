import React, { Component } from 'react'
import RefactorIcon from "../../../svg/refactorIcon";
import './tasks-item.css'
import { changeModal, changeTask } from '../../../store/action'
import {connect} from "react-redux";
import PropTypes from "prop-types";

class TasksItem extends Component {
    constructor(props) {
        super(props)
        this.onClickCheck=this.onClickCheck.bind(this)
    }
    componentDidMount() {
        if(typeof this.props.task.done !== 'undefined') {
            this.setState({ done: this.props.task.done})
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.task.done !== prevProps.task.done) {
            this.setState({done: this.props.task.done})
        }
    }

    onClickCheck () {
        let i = this.props.task
        i.done = !i.done
        this.props.changeTask(i)
    }
    render() {
        const { task } = this.props

        return(
            <li className="tasks-item">
                <div className='d-flex justify-content-between'>
                    <div>
                        <input onChange={e=>this.onClickCheck(e)} type={'checkbox'} className='tasks-item-checkbox' checked={task.done}/>
                        {task.title}
                    </div>
                    <div onClick={() => this.props.changeModal(task)}>
                        <RefactorIcon />
                    </div>
                </div>
            </li>
        )
    }
}

TasksItem.propTypes = {
    modal: PropTypes.object,
    changeModal: PropTypes.func,
    changeTask: PropTypes.func,
    task: PropTypes.object,
    search: PropTypes.string,
    tasks: PropTypes.array
}

const mapStateToProps = ({ tasks, currentCategory}) => {
    return { tasks, currentCategory }
}
const mapDispatchToProps = {
    changeModal,
    changeTask
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksItem)