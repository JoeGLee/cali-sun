import insta from "./assets/instagram.png"
import spotify from "./assets/spotify.png"
import BeatStar from "./assets/beatstar.png"
import youtube from "./assets/youtube.png"

const Footer = () =>{
    return(
        <div className="Footer"> 
            <h2 className="footerTitle">Contact Me: </h2>
            <div className="contactLinks">
                <a href="https://www.instagram.com/calisun_ent/" target="_blank"><img src={insta} alt="" /></a>
                <a href="https://open.spotify.com/artist/1ytjk9yDg9pLSz4yaYAwoV?si=5rbXCav5S3eAsG_8aJK-2g" target="_blank"><img src={spotify} alt="" /></a>
                <a href="https://www.beatstars.com/calisun" target="_blank"><img src={BeatStar} alt="" /></a>
                <a href="https://www.youtube.com/channel/UCCMvkrEhazA1q9WmLCpdXWA" target="_blank"><img src={youtube} alt="" /></a>
            </div>
         
        </div>
    )
}

export default Footer