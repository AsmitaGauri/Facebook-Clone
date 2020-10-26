import React from 'react'
import { Avatar } from '@material-ui/core'

function SideBarRow({title,Icon,src}) {
    return (
        <div className="sidebarRow">
          {src && <Avatar src={src}/>}
          {Icon && <Icon/>}
    <h4>{title}</h4>
        </div>
    )
}

export default SideBarRow
