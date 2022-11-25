import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({type}) => {
    let data;
    switch(type){
        case "users":
            data={
                title:'USERS',
                isMoney:false,
                link:'See all users',
                icon:<PersonOutlineOutlinedIcon className='icon' style={{
                    color:'crimson',
                    backgroundColor:'rgba(255,0,0, 0.2)'
                }}/>               
            };
            break;
        case 'orders':
            data={
                title:'ORDERS',
                isMoney:true,
                link:'View all orders',
                icon:<ShoppingCartOutlinedIcon className='icon' style={{
                    color:'goldenrod',
                    backgroundColor:'rgba(218,165,32, 0.2)'
                }}/>               
            };
            break;
        case 'earnings':
            data={
                title:'EARNINGS',
                isMoney:true,
                link:'View net earning',
                icon:<MonetizationOnOutlinedIcon className='icon' style={{
                    color:'green',
                    backgroundColor:'rgba(0,128,0, 0.2)'
                }}/>               
            };
            break;
        case 'balance':
            data={
                title:'BALANCE',
                isMoney:true,
                link:'Balance detail',
                icon:<AccountBalanceWalletOutlinedIcon className='icon' style={{
                    color:'purple',
                    backgroundColor:'rgba(128,0,128, 0.2)'
                }}/>               
            };
            break;
        default:
            break;
    }
        
//temporary
const amount=100;
const percent=20;
    
  return (
    <div className='widget'>
        <div className='left'>
            <div className='title'>{data.title}</div>
            <div className='counter'>{data.isMoney && '$ '}{amount}</div>
            <div className='link'>{data.link}</div>
        </div>
        <div className='right'>
         <div className='percent positive'>
         <KeyboardArrowUpOutlinedIcon />
         {percent}%
         </div> 
        {data.icon}</div>
    </div>
  )
}

export default Widget