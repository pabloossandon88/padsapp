import React from 'react'
import PropTypes from 'prop-types'

const Screen = ({padName, fileName, padVolumen, padSpeed }) => {
  return (
    <>
       <div className='screen'>
        
        <div className='screen-line'>
          <span>{padName}</span>
          <span>{padVolumen}</span>
        </div>
        <div className='screen-line'>
        <span>{fileName}</span>
        <span>{padSpeed}</span>
        </div>
       </div>
    </>
  )
}

Screen.propTypes = {
  padName: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  padVolumen: 'vol :' + PropTypes.number.isRequired,
  padSpeed: PropTypes.number.isRequired
}
Screen.defaultProps = {
  padName: "Default PadName",
  fileName: "Empty",
  padVolumen: "",
  padSpeed: ""
}

export default Screen