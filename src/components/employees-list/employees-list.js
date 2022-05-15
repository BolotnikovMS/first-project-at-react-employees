import EmployersListItem from "../employees-list-item/employees-list-item";

import './employees-list.css'

const EmployeesList = ({data, onDelete, onToggleProp, onChangeSalary, onChangeEmployeeName, onChangeValueEmployee}) => {
  const elements = data.map(item => {
    const {id, ...itemProps} = item
    return (
      <EmployersListItem key={id} id={id} {...itemProps} onDelete={() => onDelete(id)} onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))} onChangeSalary={onChangeSalary} onChangeEmployeeName={onChangeEmployeeName} onChangeValueEmployee={onChangeValueEmployee}/>
    )
  })

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default EmployeesList