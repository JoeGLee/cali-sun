import sampleTitleImage from "./assets/sampletitle.jpeg"

const About = () => {
    return(
        <div className="aboutContainer">
            <h1 className="aboutTitle">About</h1>
            <div className="aboutBodyContainer">
                <p className="aboutBody">Cali Sun is a lyricist and producer from Southern California. Raised in the San Fernando Valley, he grew up in the graffiti and hip hop scene.</p>
                <div className="bodyImgContainer">
                    <div className="photo-1">
                        <img src={sampleTitleImage} alt="" />
                    </div>
                    
                    <div className="photo-2">
                        <img src={sampleTitleImage} alt="" />
                    </div>
                    <div className="photo-3">
                        <img src={sampleTitleImage} alt="" />
                    </div>
                    <div className="photo-4">
                        <img src={sampleTitleImage} alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About;