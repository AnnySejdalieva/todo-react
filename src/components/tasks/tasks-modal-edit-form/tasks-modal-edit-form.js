import React, { Component } from 'react'
import {Modal, DropdownButton, Dropdown} from "react-bootstrap";
import {changeTask, changeCategory} from "../../../store/action";
import {connect} from "react-redux";
import './tasks-modal-edit-form.css'
import PropTypes from "prop-types";

class TasksModalEditForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newTitle: props.modal.title ? props.modal.title : '',
            done: props.modal.done ? props.modal.done : false,
            category: props.modal.category ? props.modal.category : '',
            parent: props.modal.parent ? props.modal.parent : 0
        }
        this.checkNewTitle=this.checkNewTitle.bind(this)
        this.onClickCheck=this.onClickCheck.bind(this)
        this.saveChange=this.saveChange.bind(this)
        this.changeParent=this.changeParent.bind(this)
    }

    componentDidUpdate(prevProps) {
        if(this.props.modal.title !== prevProps.modal.title ||
            this.props.modal.done !== prevProps.modal.done ||
            this.props.modal.category !== prevProps.modal.category ||
            this.props.modal.parent !== prevProps.modal.parent
        ) {
            this.setState({
                newTitle: this.props.modal.title,
                done: this.props.modal.done ? this.props.modal.done : false,
                category: this.props.modal.category ? this.props.modal.category : '',
                parent: this.props.modal.parent ? this.props.modal.parent : 0
            })
        }
    }

    checkNewTitle (e) {
        this.setState({
            newTitle: e.target.value
        })
    }
    onClickCheck () {
        let flag = this.state.done;
        this.setState( {
            done:!flag
        })
    }
    changeParent (id) {
        this.setState({parent: id})
    }
    changeTasksCategory (id) {
        this.setState({category: id})
    }
    saveChange () {
        let i = {...this.props.modal}
        i.title = this.state.newTitle
        if(typeof this.props.modal.category !== 'undefined') {
            i.done = this.state.done
            i.category = this.state.category
            let arr = this.props.tasks.map(el=> el.id === i.id ? i : el)
            console.log(arr)
            this.props.changeTask(arr)
        } else {
            i.parent = this.state.parent
            let arr = this.props.categories.map(el=> el.id === i.id ? i : el)
            this.props.changeCategory(arr)
        }
        this.props.onHide()
        console.log(i)
    }
    render () {
        return(
            <Modal
                {...this.props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>

                </Modal.Header>
                <Modal.Body>
                    <div className="tasks-modal-edit-form">
                        <div className='tasks-modal-edit-form-block'>
                            <input type="text" className="form-control mb-2 mr-sm-2"
                                   onChange={e=>this.checkNewTitle(e)}
                                   value={this.state.newTitle} />
                        </div>
                        {
                            typeof this.props.modal.category !== 'undefined' ?
                                <>
                                    <div className='tasks-modal-edit-form-block'>
                                        <input onChange={e=>this.onClickCheck(e)} type={'checkbox'} className='tasks-item-checkbox' checked={this.state.done}/>
                                        Is Done
                                    </div>
                                    <div className='tasks-modal-edit-form-block'>
                                        <DropdownButton value={this.state.select} id="dropdown-basic-button" title="Dropdown button">
                                            {
                                                this.props.categories.map(el=>{
                                                    return <Dropdown.Item key={el.id} value={el.id} onClick={()=>this.changeTasksCategory(el.id)} active={this.state.category === el.id}>{el.title}</Dropdown.Item>
                                                })
                                            }
                                        </DropdownButton>
                                    </div></> :
                                <>
                                    <div className='tasks-modal-edit-form-block'>
                                        <label>Parent:</label>
                                        <DropdownButton value={this.state.select} id="dropdown-basic-button" title="Dropdown button">
                                            {
                                                this.props.categories.map(el=>{
                                                    return <Dropdown.Item key={el.id} value={el.id} onClick={()=>this.changeParent(el.id)} active={this.state.parent === el.id}>{el.title}</Dropdown.Item>
                                                })
                                            }
                                        </DropdownButton>
                                    </div>
                                </>

                        }
                        <div className='tasks-modal-edit-form-button'>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="submit" className="btn btn-primary mb-2 " onClick={()=> this.saveChange()}>Save</button>
                </Modal.Footer>
            </Modal>
        )
    }
}

TasksModalEditForm.propTypes = {
    modal: PropTypes.object,
    changeModal: PropTypes.func,
    onHide: PropTypes.func,
    changeTask: PropTypes.func,
    changeCategory: PropTypes.func,
    categories: PropTypes.array,
    tasks: PropTypes.array
}

const mapStateToProps =({modal, categories, tasks})=>{
    return{modal, categories, tasks}
}

const mapDispatchToProps = {
    changeTask,
    changeCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksModalEditForm)