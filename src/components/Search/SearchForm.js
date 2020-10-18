import React, { Component } from 'react';
import styles from './searc.module.css';

export default class SearchBox extends Component{
    state ={
        value: '',
    }

    handleChange = e =>{
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit = e =>{
        e.preventDefault();
        if(!this.state.value){
          return alert('Поле поиска пустое.Введите пожалуйста кино для поиска')
        }
        this.props.onSubmit(this.state.value)
        this.setState({value: ''})
    }

    render() {
        return (
                <form className={styles.form} onSubmit={this.handleSubmit}>
                <input className={styles.input} type="text"
                onChange={this.handleChange}
                value={this.state.value}
                placeholder="Enter movie for search ..."></input>
            <button className={styles.input_btn} type="button" onClick={this.handleSubmit}>Search</button>
                </form>
        )
    }
}