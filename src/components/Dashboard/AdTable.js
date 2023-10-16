import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

function AdTable() {
 
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'campaigns', headerName: 'Campaigns', width: 100},
        { field: 'clicks', headerName: 'Clicks', width: 100, type: 'number', },
        {
          field: 'cost',
          headerName: 'Cost',
          width: 130,
        },
        {
          field: 'conversions',
          headerName: 'Conversions',
          width: 100,
          
        },
        {
            field: 'revenue',
            headerName: 'Revenue',
            type: 'number',
            width: 160,
          },
      ];
      
      const rows = [
        { id: 1, campaigns: 'Cosmetics', clicks: 712 , cost: 'USD 4,272', conversions: 8, revenue: 'USD 16,568'  },
        { id: 2, campaigns: 'Serums', clicks: 3961 , cost: 'USD 27,331', conversions: 115, revenue: 'USD 362,526' },
        { id: 3, campaigns: 'Facewash', clicks: 7462 , cost: 'USD 76,823', conversions: 123, revenue: 'USD 266,800' },
        { id: 4, campaigns: 'Shampoos', clicks: 439 , cost: 'USD 2,151', conversions: 5, revenue: 'USD 11,029' },
        { id: 5, campaigns: 'Conditioners', clicks: 1680 , cost: 'USD 3,864', conversions: 49, revenue: 'USD 175,245' },
        { id: 6, campaigns: 'Facewash2', clicks: 4978 , cost: 'USD 29,370', conversions: 189, revenue: 'USD 623,106' },
        { id: 7, campaigns: 'Total', clicks: 26510 , cost: 'USD 1,43,819', conversions: 489, revenue: 'USD 15,73,563' },
      ];

  return (
    
    <div style={{ height: 400, width: '100%', border: '1px solid grey' }}>
    <p className='table-header'>Ad Insights</p>
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
    />
  </div>
  )
}

export default AdTable