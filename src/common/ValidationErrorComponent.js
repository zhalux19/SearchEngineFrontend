import React from 'react'
import PropTypes from 'prop-types'
import {Alert} from "react-bootstrap"

const ValidationError = ({errors}) => {
    return (
        <>
            {
               Object.keys(errors).map(x => <Alert variant='danger' key={x}>{errors[x].message}</Alert>)
            }
        </>
    )
}

ValidationError.propTypes = {
    errors: PropTypes.object.isRequired, 
}

export default ValidationError
