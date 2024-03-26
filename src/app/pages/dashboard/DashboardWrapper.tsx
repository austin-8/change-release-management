/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  CardsWidget17,
  CardsWidget20
} from '../../../_metronic/partials/widgets'
import DonutChart from './DonutCharts'

const DashboardPage: FC = () => (
  <>
    <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
      <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
        <CardsWidget20
          className='h-md-100 mb-5 mb-xl-10'
          description='Active Projects'
          color='#F1416C'
          img={toAbsoluteUrl('/media/patterns/vector-1.png')}
        />
      </div>
      <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
        <CardsWidget17 className='h-md-100 mb-5 mb-xl-10' />
      </div>
      <div  className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'> 
         <DonutChart />
      </div>
    </div>
  </>
)


const DashboardWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>{'Dashboard'}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
