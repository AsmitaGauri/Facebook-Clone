import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import {Avatar,IconButton} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStateValue} from '../ReactContextApi/StateProvider'
// import {} from 're'
function Header() {
    const [{user},dispatch]=useStateValue();

    return (
        <div className="header">
            <div class="header__left">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt=""/>
                <div class="header__input">
                    <SearchIcon/>
                    <input type="text" placeholder="Search Facebook"/>
                </div>
            </div>

            <div class="header__middle">
                <div class="header__option header__option--active">
                    <HomeIcon fontSize="large"/>
                </div>
                <div class="header__option">
                    <FlagIcon fontSize="large"/>
                </div>
                <div class="header__option">
                    <SubscriptionsIcon fontSize="large"/>
                </div>
                <div class="header__option">
                    <StorefrontIcon fontSize="large"/>
                </div>
                <div class="header__option">
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>
            </div>
            <duv class="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL}/>
    <h4>{user.displayName}</h4>
                </div>
                <div className="right__icons">
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon/>  
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>  
                </IconButton>
                </div>
               
            </duv>
        </div>
    )
}

export default Header
