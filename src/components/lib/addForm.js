import React, { Component } from "react";
import {addCategory, addTask} from "../../store/action";
import {connect} from "react-redux";

class AddForm extends Component {
    state = {
        titleItem: ''
    }
    addItem(e) {
        e.preventDefault()
        console.log(this.state.titleItem, e.target.value)
        let keys = []
        this.props.items.map((el)=>keys.push(el.id))
        let id = Math.max(...keys)
        console.log(id+1)
        switch(this.props.type) {
            case 'category':
                this.props.addCategory({id: ++id, parent:this.props.parentCategory, title:this.state.titleItem})
                break;
            case 'task':
                this.props.addTask({id: ++id, title:this.state.titleItem, done: false, category: this.props.currentCategory})
                break;
            default:
                break;
        }
        this.setState(({titleItem: ''}))
    }
    onChangeInp(e) {
        this.setState(({titleItem: e.target.value}))
    }
    render() {
        return (
                <form className="form-inline" onSubmit={e=> this.addItem(e)}>
                    <input type="text" className="form-control mb-2 mr-sm-2"
                           placeholder={this.props.placeholder}
                           onChange={e => this.onChangeInp(e)}
                           value={this.state.titleItem} />
                    <button type="submit" className="btn btn-primary mb-2">Add</button>
                </form>
        )
    }

}
const mapStateToProps = ({ currentCategory }) => {
    return { currentCategory }
}

const mapDispatchToProps = {
    addCategory, addTask
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm)