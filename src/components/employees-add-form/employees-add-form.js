import {Component} from "react";

// import './employees-add-form.css';
import './employees-add-form.scss'

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      salary: ''
    }
    this.messages = ''
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  onSubmitForm = (e) => {
    e.preventDefault()
    if (this.state.name !== '' && this.state.name !== null && this.state.name.length > 3 && this.state.salary > 0) {
      this.props.onAdd(this.state.name, this.state.salary)
      this.setState({
        name: '',
        salary: '',
        messages: ''
      })
    } else {
      this.setState({messages: 'Некорректно введенно имя сотрудника!'})
    }
  }

  render () {
    const {name, salary, messages} = this.state

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <div>{messages}</div>
        <form onSubmit={this.onSubmitForm}
          className="add-form d-flex">
          <input type="text"
                 className="form-control new-post-label"
                 name="name"
                 value={name}
                 placeholder="Как его зовут?" onChange={this.onValueChange} />
          <input type="number"
                 className="form-control new-post-label"
                 name="salary"
                 value={salary}
                 placeholder="З/П в $?" onChange={this.onValueChange} />
          <button type="submit"
                  className="btn btn-outline-light">Добавить</button>
        </form>
      </div>
    )
  }
}

export default EmployeesAddForm