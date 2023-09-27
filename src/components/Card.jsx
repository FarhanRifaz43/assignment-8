import PropTypes from 'prop-types';

const Card = ({ card }) => {
    const { image, title, category, background_color, text_color, category_background_color } = card;
    return (
        <div style={{background: background_color}} className="card max-w-xs">
            <figure className='mb-6'><img src={image} alt="image" /></figure>
            <div className="pl-5 pr-3 mb-5">
                    <div style={{background: category_background_color, color: text_color}} className="w-fit px-2 rounded-md mb-2">{category}</div>
                <p className='font-semibold' style={{color:text_color}}>{title}</p>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object
}

export default Card;