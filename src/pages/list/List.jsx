import './list.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DataTable from '../../components/datatable/Datatable'

function List() {
  return (
    <div className='list'>
      <Sidebar />
      <div className='container'>
        <Navbar />
        <DataTable />
      </div>
    </div>
  )
}

export default List