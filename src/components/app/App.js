import React, { Component } from 'react'
import { CategoryContainer } from "../containers";
import { TasksContainer } from "../containers";
import './app.css'
import TasksModalEditForm from "../tasks/tasks-modal-edit-form/tasks-modal-edit-form";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {changeModal} from '../../store/action'

class App extends Component{
    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
    }
    componentDidUpdate(prevProps) {
        if(this.props.modal.id !== prevProps.modal.id) {
            this.setState({showModal: Object.keys(this.props.modal).length !== 0})
        }
    }
    render() {
        return (
            <div className='app container'>
                <CategoryContainer />
                <TasksContainer />
                <TasksModalEditForm
                    show={this.state.showModal}
                    onHide={() => this.props.changeModal({})}
                />
            </div>
        )
    }
}
App.propTypes = {
    modal: PropTypes.object,
    changeModal: PropTypes.func
}

const mapStateToProps = (state) => {
    return {modal: state.modal}
}

const mapDispatchToProps = {
    changeModal
}

export default connect(mapStateToProps, mapDispatchToProps)(App)