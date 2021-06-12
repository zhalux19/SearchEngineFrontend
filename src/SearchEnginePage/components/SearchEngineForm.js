import React from 'react'
import { useForm} from "react-hook-form";
import {Col, Form, Button} from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import ValidationError from '../../common/ValidationErrorComponent';
import PropTypes from 'prop-types'


const SearchEngineForm = ({searchEngineOptions, isFetchingRanks, fetchRanks}) => {

    const schema = yup.object().shape({
        searchEngineId: yup.number().typeError("Please select a search engine").required(),
        keyword: yup.string().trim().required("Please enter keyword"),
        targetUrl: yup.string().trim().required("Please enter url"),
    });

    const defaultFormData = {};

    const { register, handleSubmit, errors} = useForm({
        defaultValues: defaultFormData,
        resolver: yupResolver(schema)
    });

    const submitForm = (data) =>{
        fetchRanks(data.searchEngineId, data.keyword, data.targetUrl);
    }

    return (
        <Form onSubmit={handleSubmit(submitForm)}>
            <ValidationError errors={errors} />
            <Form.Row>
                <Form.Group as={Col} sm={12} md={3}>
                    <Form.Control
                            as="select"
                            defaultValue=""
                            name="searchEngineId"
                            ref={register}
                        >
                            <option disabled value="">
                                Select an search engine
                            </option>
                            {
                                searchEngineOptions && searchEngineOptions.map((x) => (
                                    <option key={x.id} value={x.id}>{x.name}</option>
                                    ))
                            }
                        </Form.Control>
                </Form.Group>
                <Form.Group as={Col} sm={12} md={3}>
                    <Form.Control
                            placeholder="keyword"
                            name="keyword"
                            ref={register}
                        />
                </Form.Group>
                <Form.Group as={Col} sm={12} md={4}>
                    <Form.Control
                            placeholder="targetUrl"
                            name="targetUrl"
                            ref={register}
                        />
                </Form.Group>
                <Form.Group as={Col} sm={12} md={2}>
                    <Button type="submit" className="float-right" disabled={isFetchingRanks}>{ isFetchingRanks ? "Submitting": "Submit" }</Button>
                </Form.Group>
            </Form.Row>
        </Form>
    )
}

SearchEngineForm.propTypes = {
    searchEngineOptions: PropTypes.array.isRequired, 
    isFetchingRanks: PropTypes.bool.isRequired,
    fetchRanks: PropTypes.func.isRequired
}

export default SearchEngineForm
