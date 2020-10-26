import React from 'react'
import SideBarRow from './SideBarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat'; 
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStateValue} from '../ReactContextApi/StateProvider'

function SideBar() {
    const [{user},dispatch]=useStateValue();

    return (
        <div className="sidebar">
            <SideBarRow title={user.displayName} src={user.photoURL}/>
            <SideBarRow title="COVID-19 Information Centre" Icon={LocalHospitalIcon}/>
            <SideBarRow title="Pages" Icon={EmojiFlagsIcon}/>
            <SideBarRow title="Friends" Icon={PeopleIcon}/> 
            <SideBarRow title="Messenger" Icon={ChatIcon}/>
            <SideBarRow title="Market Place" Icon={StorefrontIcon}/>
            <SideBarRow title="Videos" Icon={VideoLibraryIcon}/>
            <SideBarRow title="Market Place" Icon={ExpandMoreIcon}/>    
        </div>
    )
}

export default SideBar
