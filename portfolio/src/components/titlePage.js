import sampleTitleImage from "./assets/sampletitle.jpeg"

const TitlePage = () => {

    return(
        <div className="titlePage">
            <h1 className="title">Cali Sun</h1>
           <img className="img" src={sampleTitleImage} alt="" />
        </div>
    )
}

export default TitlePage;