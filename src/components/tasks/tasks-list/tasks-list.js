import React, { Component } from 'react'
import {connect} from "react-redux";
import TasksItem from "../tasks-item";
import PropTypes from "prop-types";
import {createFilter} from "react-search-input";
import {debounce} from "lodash";

const KEYS_TO_FILTERS = ['title']

class TasksList extends Component{
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            a: 0
        }
        this.updateList = this.updateList.bind(this)
        this.showOnlyDone = this.showOnlyDone.bind(this)
        this.filterSearch = async() => {
            return new Promise((resolve) => {
                resolve(this.state.items.filter(createFilter(this.props.search, KEYS_TO_FILTERS)));
            });
        };
        this.debounced = debounce(async () => {
            this.state.a = 1;
            const filter = await this.filterSearch();
            console.log(filter)
            this.setState({ items: [...filter], a:this.state.a + 1 });
            return filter;
        }, 500);
    }
    componentDidMount() {
        if(this.props.tasks) {
            this.updateList()
        }
        if(this.props.showDone) {
            this.showOnlyDone()
        }
    }

    updateList () {
        let list = this.props.tasks
            .filter(el=>el.category === this.props.currentCategory)
        this.setState({items: list})
    }
    showOnlyDone () {
        let itemIsDone = this.props.tasks
            .filter((el)=>el.done && el.category === this.props.currentCategory)
        this.setState({items: itemIsDone})
        console.log(this.props.showDone, itemIsDone, this.state)
    }

    async componentDidUpdate(prevProps) {
        if(this.props.search !== prevProps.search) {
            await this.debounced();
        }
        if(this.props.tasks.length !== prevProps.tasks.length) {
            this.updateList()
        }
        if(this.props.showDone !== prevProps.showDone ||
            this.props.currentCategory !== prevProps.currentCategory) {
            if(this.props.showDone) {
                this.showOnlyDone()
            } else {
                this.updateList()
            }
        }
    }

    render() {
        return(
            <ul className="list-group list-group-flush">
                {
                    this.state.items.map((task, key)=>{
                        return (
                            <TasksItem isDone={()=>{this.isDone(key)}} task={task} key={key}/>
                            )
                    })
                }
            </ul>
        )
    }
}

TasksList.propTypes = {
    tasks: PropTypes.array,
    currentCategory: PropTypes.number,
    showDone: PropTypes.bool,
    search: PropTypes.string
}

const mapStateToProps = ({ tasks, currentCategory, showDone, search }) => {
    return { tasks, currentCategory, showDone, search }
}

export default connect(mapStateToProps)(TasksList)