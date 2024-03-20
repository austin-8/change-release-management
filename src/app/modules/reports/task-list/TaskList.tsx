import {ListViewProvider} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {TaskListHeader} from './components/header/TaskListHeader'
import { TaskTable } from './table/TaskTable'
import {KTCard} from '../../../../_metronic/helpers'

const TaskList = () => {
  return (
    <>
      <KTCard>
        <TaskListHeader />
        <TaskTable />
      </KTCard>
    </>
  )
}

const TaskListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <TaskList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {TaskListWrapper}
