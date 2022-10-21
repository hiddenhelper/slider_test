import "./style.css"

const SlideImage = ({ data }) => {
    const { title, price, imageURL } = data;

    return (
        <div>
            <img src={imageURL} alt="not available" className="sliderImg"/>
            <h2>{title}</h2>
            <label>{price}</label>
        </div>
    )
}

export default SlideImage;