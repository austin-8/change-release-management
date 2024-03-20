import {ID, Response} from '../../../../../_metronic/helpers'
export type Task = {
  number?: string
  shortDescription?: string
  type?: string
  state?: string
  plannedStartDate?: string
  plannedEndDate?: string
  assignedTo?: string
  closed?: string
  serviceOffering?: string
  taskType? : string;
}

export type UsersQueryResponse = Response<Array<Task>>
