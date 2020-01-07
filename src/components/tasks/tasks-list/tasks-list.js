import React, { Component } from 'react'
import {connect} from "react-redux";
import TasksItem from "../tasks-item";
import PropTypes from "prop-types";
import {createFilter} from "react-search-input";
import {debounce} from "lodash";
import Spinner from "react-bootstrap/Spinner";
import {finishLoading} from "../../../store/action";

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
            let list = this.props.tasks
                .filter(el=>el.category === this.props.currentCategory)
            return new Promise((resolve) => {
                resolve(list.filter(createFilter(this.props.search, KEYS_TO_FILTERS)));
            });
        };
        this.debounced = debounce(async () => {
            this.state.a = 1;
            const filter = await this.filterSearch();
            this.setState({ items: [...filter], a: this.state.a + 1});
            console.log('debounced', filter)
            this.props.finishLoading()
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
    }

    async componentDidUpdate(prevProps) {
        if(this.props.search !== prevProps.search) {
            await this.debounced();
            console.log('componentDidUpdate Props')
        }
        if(this.props.showDone !== prevProps.showDone ||
            this.props.currentCategory !== prevProps.currentCategory) {
            if(this.props.showDone) {
                this.showOnlyDone()
            } else {
                this.updateList()
            }
        }
        if(this.props.tasks && prevProps.tasks) {
            if(this.props.tasks.length !== prevProps.tasks.length) {
                this.updateList()
            } else {
                let list = this.props.tasks
                    .filter(el=>el.category === this.props.currentCategory)
                let prevList = prevProps.tasks
                    .filter(el=>el.category === prevProps.currentCategory)
                if(list.length === prevList.length) {
                    list.forEach((item, i)=>{
                        if( prevList[i].title !== item.title || prevList[i].done !== item.done ) {
                            this.updateList()
                        }
                    })
                } else {
                    this.updateList()
                }
            }
        }
    }
    render() {

        return (
            <div>
                {
                    this.props.loading ?
                        <div className="d-flex justify-content-center">
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        </div> :
                        <ul className="list-group list-group-flush">
                            {
                                this.state.items.map((task, key)=>{
                                    return (
                                        <TasksItem isDone={()=>{this.isDone(key)}} task={task} key={key}/>
                                    )
                                })
                            }
                        </ul>
                }
            </div>
        )

    }
}

TasksList.propTypes = {
    tasks: PropTypes.array,
    currentCategory: PropTypes.number,
    showDone: PropTypes.bool,
    search: PropTypes.string,
    loading: PropTypes.bool,
    finishLoading: PropTypes.func
}

const mapStateToProps = ({ tasks, currentCategory, showDone, search, loading }) => {
    return { tasks, currentCategory, showDone, search, loading }
}

const mapDispatchToProps = {
    finishLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksList)