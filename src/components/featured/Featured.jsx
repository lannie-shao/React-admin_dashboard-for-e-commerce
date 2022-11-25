import './featured.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Featured = () => {
  return (
    <div className='featured'>
    <div className='top'>
        <h4>Total Revenue</h4>
        <MoreVertOutlinedIcon style={{  color:'rgb(171, 169, 169)'}}/>
    </div>

    <div className='bottom'>
        <div className='chart'>
            <CircularProgressbar value={70} text="70%" strokeWidth={5}/>
        </div>
        <p className='title'>Total sales made today</p>
        <p className='amount'>$420</p>
        <p className='desc'> Previous transactions processing. Last payments may not be included.</p>
        <div className='summary'>
            <div className='items'>
                <div className='itemTitle'>Target</div>
                <div className='itemResult positive'>
                    <KeyboardArrowUpOutlinedIcon  style={{fontSize:'18px'}} />
                    <p>$ 12.4</p>
                </div>
            </div>
            <div className='items'>
                <div className='itemTitle'>Last Week</div>
                <div className='itemResult positive'>
                    <KeyboardArrowUpOutlinedIcon  style={{fontSize:'18px'}} />
                    <p>$ 12.4</p>
                </div>
            </div>
            <div className='items'>
                <div className='itemTitle'>Last Month</div>
                <div className='itemResult negative'>
                    <KeyboardArrowDownOutlinedIcon style={{fontSize:'18px'}} />
                    <p>$ 12.4</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Featured