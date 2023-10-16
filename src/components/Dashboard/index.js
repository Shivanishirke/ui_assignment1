import React from 'react'
import AdTable from './AdTable'
import AdChart from './AdChart'

function Index() {
  return (
    <div className='main-container'>
    <div className='table-section'>
          <AdTable/>
    </div>

    <div className='piechart-section'>
          <AdChart/>
    </div>
</div>
  )
}

export default Index