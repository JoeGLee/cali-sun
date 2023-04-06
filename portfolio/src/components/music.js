const Music = () => {
    return(
        <div className="musicContainer">
            <h1 className="musicTitle">Music</h1>
            <div className="musicBodyContainer">
                <div className="spotifyContainer">
                    <div className="linkContainer">
                        <a href="https://open.spotify.com/artist/1ytjk9yDg9pLSz4yaYAwoV?si=5rbXCav5S3eAsG_8aJK-2g" target="_blank" rel="noreferrer" className="link">Spotify</a>
                     </div>
                </div>
                <div className="youtubeContainer">
                    <div className="linkContainer"> 
                        <a href="https://www.youtube.com/channel/UCCMvkrEhazA1q9WmLCpdXWA" target="_blank" rel="noreferrer" className="link">Youtube</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Music;