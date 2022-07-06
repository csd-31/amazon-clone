import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';

export default function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const login = () => {
    if(user) {
      signOut(auth)
    }
  }

  return (
      <nav className='header'>
          <Link to='/'>
          <img className='header__logo'
                src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
          </Link>
          
          <div className='header__search'>
          <input type='text' className='header__searchInput'/>
          <SearchIcon className='header__searchIcon'/>
          </div>

          <div className='header__nav'>

           <Link to={!user && '/login'} className='header__link'>
            <div onClick={login} className='header__option'>
              <span className='header__optionLineOne'>Hello {!user ? 'Guest' : user.email}</span>
              <span className='header__optionLineTwo'>{user ? "Sign out" : "Sign in"}</span>
            </div>
           </Link>

           <Link to='/' className='header__link'>
            <div className='header__option'>
              <span className='header__optionLineOne'>Returns</span>
              <span className='header__optionLineTwo'>Orders</span>
            </div>
           </Link>

           <Link to='/' className='header__link'>
            <div className='header__option'>
              <span className='header__optionLineOne'>Your</span>
              <span className='header__optionLineTwo'>Prime</span>
            </div>
           </Link>

            <Link to='/checkout' className='header__link'>
               <div className='header__optionBasket'>
                 <ShoppingBasketIcon/>
                 <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
               </div>
           </Link>
          </div>
    </nav>

  )
}
