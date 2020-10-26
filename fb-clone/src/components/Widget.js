import React from 'react'
import { Hidden } from '@material-ui/core'

function Widget() {
    return (
        <div className="widget">
          <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="340"
          height="1500"
          style={{border:"none",overflow:"hidden"}}
          scrolling="no"
          frameborder="0"
          allowTransparency="true"
          allow="encrypted-media">

          </iframe> 
             
{/* <div class="fb-page" data-href="https://www.facebook.com/facebook" data-tabs="timeline" data-width="1000" data-height="1500" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true"><blockquote cite="https://www.facebook.com/facebook" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/facebook">Facebook</a></blockquote></div> */}

        </div>
    )
}

export default Widget
