import {Component} from "react";

import './employees-list-item.css'

class EmployeesListItem extends Component {
  onValueChangeSalary = (e) => {
    this.props.onChangeSalary(this.props.id, [e.target.name] = e.target.value.slice(0, e.target.value.length - 1))
  }

  onValueChangeName = (e) => {
    this.props.onChangeEmployeeName(this.props.id, [e.target.name] = e.target.value)
  }

  onValueChange = (e) => {
    this.props.onChangeValueEmployee(this.props.id, e.currentTarget.getAttribute('data-atr'), [e.target.name] = e.target.value)
  }

  render() {
    const {name, salary, onDelete, onToggleProp, increase, rise} = this.props

    let classNames = "list-group-item d-flex justify-content-between"
    let classNamesStar = "far fa-star"

    if (increase) {
      classNames += ' increase'
    }

    if (rise) {
      classNamesStar = 'fas fa-star'
    }

    return (
      <li className={classNames}>
        {/*<span className="list-group-item-label like">{name}</span>*/}
        <input type="text" className="list-group-item-input-big"
               defaultValue={name}
               name="name"
               data-atr="name"
               onChange={this.onValueChange}/>
        <input type="text" className="list-group-item-input"
               defaultValue={salary + '$'}
               name="salary"
               data-atr="salary"
               onChange={this.onValueChange}/>
        <div className='d-flex justify-content-center align-items-center'>
          <button type="button"
                  className="btn-cookie btn-sm "
                  onClick={onToggleProp}
                  data-toggle="rise">
            <i className={classNamesStar}></i>
          </button>
          <button type="button"
                  className="btn-cookie btn-sm "
                  onClick={onToggleProp}
                  data-toggle="increase">
            <i className="fas fa-cookie"></i>
          </button>
          <button type="button"
                  className="btn-trash btn-sm "
                  onClick={onDelete}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </li>
    )
  }
}

export default EmployeesListItem