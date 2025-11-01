import React from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='Search...' />
            <SearchIcon className='icon' />
        </div>
        <div className="items">

          <div className="item">
            <LanguageIcon className='icon'/>
            English
          </div>

          <div className="item">
            <DarkModeOutlinedIcon className='icon'/>
          </div>

          <div className="item">
            <FullscreenExitIcon className='icon'/>
          </div>

          <div className="item">
            <NotificationsNoneIcon className='icon'/>
            <div className='counter'>1</div>
          </div>

          <div className="item">
            <ChatBubbleOutlineIcon className='icon'/>
            <div className='counter'>2</div>
          </div>

          <div className="item">
            <ListIcon className='icon'/>
          </div>

          <div className="item">
              <img 
              alt=''
              src='https://www.pexels.com/photo/man-in-brown-polo-shirt-614810/'
              className='avatar'
              />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar