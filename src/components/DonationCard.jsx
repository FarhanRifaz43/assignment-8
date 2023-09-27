import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const DonationCard = ({donation}) => {
    const {id, category, title, image, category_background_color, background_color, text_color} = donation;
    return (
        <div className="flex">
            <img className="w-40" src={image} alt="" />
            <div className="p-5  w-96" style={{background: background_color}}>
        <h2 className="w-fit px-2 rounded-sm mb-2" style={{background: category_background_color, color: text_color}}>{category}</h2>
        <h2>{title}</h2>
        <p style={{color: text_color}}>$290.00</p>
        <Link to={`/details/${id}`}>
        <button className="mt-2 px-2 py-1 rounded-md" style={{background: text_color, color: "white"}}>View Details</button></Link>
        </div>
        </div>
    );
};

DonationCard.propTypes = {
    donation: PropTypes.object.isRequired
}

export default DonationCard;