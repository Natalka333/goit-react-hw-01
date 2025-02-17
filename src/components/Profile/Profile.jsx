import PropTypes from 'prop-types';
import { FaUserAlt, FaTags, FaMapMarkerAlt } from 'react-icons/fa';
import css from './Profile.module.css';

const Profile = ({ image, name, tag, location, stats }) => {


    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img src={image} alt="User avatar" className={css.avatar} />
                <p className={css.name}><FaUserAlt size={14} /> {name}</p>
                <p className={css.tag}><FaTags size={16} /> {tag}</p>
                <p className={css.location}><FaMapMarkerAlt size={16} /> {location}</p>
            </div>

            <ul className={css.stats}>
                <li>
                    <span className={css.label}>Followers</span>
                    <span className={css.quantity}>{stats.followers}</span>
                </li>
                <li>
                    <span className={css.label}>Views</span>
                    <span className={css.quantity}>{stats.views}</span>
                </li>
                <li>
                    <span className={css.label}>Likes</span>
                    <span className={css.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}

Profile.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};


export default Profile