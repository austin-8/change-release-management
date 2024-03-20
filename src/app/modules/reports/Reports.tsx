import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import { TaskListWrapper } from './task-list/TaskList'
import React from 'react'


const Reports = () => {
  return (
     <React.Fragment>
        <PageTitle>Reports</PageTitle>
        <TaskListWrapper />
     </React.Fragment>
  )
}

export default Reports
