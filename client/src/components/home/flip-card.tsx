interface FlipCardProps {
    title: string;
    text: string;
    image: string; 
    alt: string;
    cssClassType: string;
}

const FlipCard: React.FC<FlipCardProps> = ({title, text, image, alt, cssClassType}) => {

    const cssClassFront = `flip-card__front flip-card__front--${cssClassType}`; 
    const cssClassBack = `flip-card__back flip-card__back--${cssClassType}`;

    return (
        <div className="flip-card">
        <div className="flip-card__inner">
            <div className={cssClassFront}>
            <h1 className="flip-card__inner--title">{title}</h1> 
            <img className = "header__logo" 
                alt = {alt}
                role = 'logo-image' src= {image}></img>
            </div>
            <div className={cssClassBack}>
                <h1 className="flip-card__inner--title">{title}</h1> 
                <p className="flip-card__inner--text">{text}</p> 
            </div>
        </div>  
    </div>
    );
}
export default FlipCard;