import './datatable.scss'
import {Link} from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import {userRows as rows, userColumns as columns} from '../../datatableSource'
import { useState } from 'react';


const DataTable = () => {
  const [data,setData]=useState(rows);
  const handleDele=(id)=>{
    setData(data.filter(row=>row.id!==id))
  }
  const column=[
    {field:'action', headerName: 'Action',width:200,
    renderCell:(params)=>{
        return(
            <div>
                <Link to='/users/test'>
                <button className='view'>View</button>
                </Link>
                <button className='delete' onClick={()=>
                handleDele(params.row.id)}>Delete</button>
            </div>
        )
    }}
  ]
  return (
    <div className='datatable'>
    <Link to='/users/new'>
    <h4 className='title'>Add New User</h4>
    </Link>
        <DataGrid
        rows={data}
        columns={columns.concat(column)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable