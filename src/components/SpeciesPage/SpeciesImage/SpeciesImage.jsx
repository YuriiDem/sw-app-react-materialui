import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

function SpeciesImage({ speciesImage, speciesName }) {
  return (
    <>
      <Box component="div" >
        <img src={speciesImage} alt={speciesName} />
      </Box>
    </>
  );
}

SpeciesImage.propTypes = {
  speciesImage: PropTypes.string,
  speciesName: PropTypes.string,
}

export default SpeciesImage;