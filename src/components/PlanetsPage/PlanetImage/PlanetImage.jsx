import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

function PlanetImage({ planetImage, planetName }) {
  return (
    <>
      <Box component="div">
        <img src={planetImage} alt={planetName} />
      </Box>
    </>
  );
}

PlanetImage.propTypes = {
  planetImage: PropTypes.string,
  planetName: PropTypes.string,
}

export default PlanetImage;