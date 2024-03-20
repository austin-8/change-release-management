import {TaskListToolbar} from './TaskListToolbar'
import {TasksListSearchComponent} from './TaskListSearchComponent'

const TaskListHeader = () => {
  return (
    <div className='card-header border-0 pt-6'>
      <TasksListSearchComponent />
      <div className='card-toolbar'>
         <TaskListToolbar />
      </div>
    </div>
  )
}

export {TaskListHeader}
