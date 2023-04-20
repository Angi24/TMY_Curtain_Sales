import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

const validatorInput = (data) => {
    /**
     * validator.isEmpty: Verify that it is empty
     */
    let errors = {}
    if (validator.isEmpty(data.username)) {
        errors.username = 'Username can not be empty'
    }
    if (validator.isEmpty(data.password)) {
        errors.password = 'Password can not be empty'
    }
    return {
        // If value is empty, then return true, otherwise return false
        isValid: !isEmpty(errors),
        errors
    }
}

export default validatorInput