import React from 'react'
import { Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'

const ResultDisplay = ({ranks}) => {
    return (
        <Row>
            <Col>Ranks: {ranks.map(x => `${x} `)}</Col>
        </Row>
    )
}

ResultDisplay.propTypes = {
    ranks: PropTypes.array.isRequired
}

export default ResultDisplay
