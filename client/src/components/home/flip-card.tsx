interface FlipCardProps {
    title: string;
    count: number;
    image: string; 
    alt: string;
    cssClassType: string;
    icon: string;
}

const FlipCard: React.FC<FlipCardProps> = ({title, count, icon, image, alt, cssClassType}) => {

    const cssClassFront = `flip-card__front flip-card__front--${cssClassType}`; 
    const cssClassBack = `flip-card__back flip-card__back--${cssClassType}`;

    return (
        <div className="flip-card">
        <div className="flip-card__inner">
            <div className={cssClassFront}>
            <h1 className="flip-card__inner--title">{title}</h1> 
            <p className="flip-card__inner--icon">{icon}</p> 
            <img className = "flip-card__inner--logo" 
                alt = {alt}
                role = 'logo-image' src= {image}></img>
            </div>
            <div className={cssClassBack}>
                <h1 className="flip-card__inner--title">{title}</h1> 
                <p className="flip-card__inner--icon">{icon}</p> 
                <p className="flip-card__inner--text">Misdemeanours reported today: {count}</p> 
            </div>
        </div>  
    </div>
    );
}
export default FlipCard;