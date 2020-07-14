// Validation
export interface Validatable {
    value: string | number;
    required?: boolean; // or boolean | undefined; it`s the same
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
}

export function validate(validatebleInput: Validatable) {
    let isvalid = true;
    if (validatebleInput.required) {
        isvalid = isvalid && validatebleInput.value.toString().trim().length !==0;
    }
    if (validatebleInput.minLength != null && typeof validatebleInput.value === 'string') { 
        // != null same as !== null && !== undefined
        isvalid = isvalid && validatebleInput.value.length >= validatebleInput.minLength;
    }
    if (validatebleInput.maxLength != null && typeof validatebleInput.value === 'string') {
        isvalid = isvalid && validatebleInput.value.length <= validatebleInput.maxLength;
    }
    if  (validatebleInput.min != null && typeof validatebleInput.value === 'number') {
        isvalid = isvalid && validatebleInput.value >= validatebleInput.min;
    }
    if  (validatebleInput.max != null && typeof validatebleInput.value === 'number') {
        isvalid = isvalid && validatebleInput.value <= validatebleInput.max;
    }
    return isvalid;
}
