import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './home.scss'
import Widget from '../../components/widgets/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/charts/Chart'
import Table from '../../components/table/Table'

const Home=()=> {
  return (
    <div className='home'>
        <Sidebar />
        <div className='container'>
          <Navbar />
          <div className='widgets'>
            <Widget type='users'/>
            <Widget type='orders'/>
            <Widget type='earnings'/>
            <Widget type='balance'/>
          </div>
          <div className='charts'>
            <Featured />
            <Chart title='Last 6 months (Revenue)' aspect={2/1.2} />
          </div>
          <div className='listContainer'>
            <h3 className='listTitle'>Latest Transaction</h3>
            <Table />
          </div>
        </div>
    </div>
  )
}

export default Home
