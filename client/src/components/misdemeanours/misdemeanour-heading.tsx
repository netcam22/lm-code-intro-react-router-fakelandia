import { MisdemeanourHeading} from "../../data/misdemeanour_data";
interface MisdemeanourTableHeadingProps {
    heading: MisdemeanourHeading;
}

const MisdemeanourTableHeading : React.FC<MisdemeanourTableHeadingProps> = ({heading}) => {
    return (
    <>
        <div className = "cell cell--heading">{heading}</div>
    </>
    )
    }
export default MisdemeanourTableHeading;