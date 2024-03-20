import React, {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import {ReportsPage} from './ReportsPage'

const ReportsPageWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Reports</PageTitle>
      <ReportsPage />
    </>
  )
}

export default ReportsPageWrapper
