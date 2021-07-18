import React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@material-ui/core/LinearProgress";

import Box from "@material-ui/core/Box";

export const LineaDeProgreso = (props) => {
  return (
    <div>
      <Box  display="flex" alignItems="center">
        <Box  width="100%" mr={1}>
          <LinearProgress className="content-progreso" variant="determinate" {...props} />
        </Box>
      
      </Box>
    </div>
  );
};

LineaDeProgreso.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};
