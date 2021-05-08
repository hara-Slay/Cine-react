import React from 'react'
import "../trailer.css"

export default function Iframe() {
    return (
        <div>
            <video className="videoTrailer" src="https://player.vimeo.com/external/495846401.hd.mp4?s=ab33eb7b34ca6af3bf954017e6794cd0772a56f4&profile_id=175"
                playsInline="playsInline" autoPlay="autoplay" muted="muted" loop="loop"></video>
            
        </div>
    )
}
