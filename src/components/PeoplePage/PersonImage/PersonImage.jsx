import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

function PersonImage({ personImage, personName }) {
    return (
        <>
            <Box component="div" >
                <img src={personImage} alt={personName} />
            </Box>
        </>
    );
}

PersonImage.propTypes = {
    personImage: PropTypes.string,
    personName: PropTypes.string,
}

export default PersonImage;