import React from "react"
import PropTypes from "prop-types"

const Kaggle = ({ color }) => {
  return (
    <svg width="64" height="64"
    viewBox="0 0 32 32">
    <defs>
        <path id="B" d="M31.5 15.978h289v130.044h-289z" />
    </defs>
    <path transform="matrix(.527027 0 0 .527027 -30.632288 -22.45559)" clip-path="url(#A)"
        d="M105.75 102.968c-.06.238-.298.357-.713.357H97.1c-.477 0-.89-.208-1.248-.625L82.746 86.028l-3.655 3.477v12.93c0 .595-.298.892-.892.892h-6.152c-.595 0-.892-.297-.892-.892V43.5c0-.593.297-.89.892-.89H78.2c.594 0 .892.298.892.89v36.288l15.692-15.87c.416-.415.832-.624 1.248-.624h8.204c.356 0 .593.15.713.445.12.357.09.624-.09.803L88.274 80.588l17.297 21.488c.237.238.297.535.18.892"
        fill={color} />
</svg>
  )
}

Kaggle.propTypes = {
  color: PropTypes.string,
}

Kaggle.defaultProps = {
  color: "#000000",
}

export default Kaggle
