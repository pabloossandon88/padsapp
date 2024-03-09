import React from 'react'
import PropTypes from 'prop-types'

const Screen = ({padName, fileName}) => {
  return (
    <>
       <div className='screen'>
        <span>{padName}</span>
        <span>{fileName}</span>
       </div>
    </>
  )
}

Screen.propTypes = {
  padName: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired
}
Screen.defaultProps = {
  padName: "Default PadName",
  fileName: "Empty"
}

export default Screen