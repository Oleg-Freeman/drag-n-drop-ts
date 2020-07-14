export function validate(validatebleInput) {
    let isvalid = true;
    if (validatebleInput.required) {
        isvalid = isvalid && validatebleInput.value.toString().trim().length !== 0;
    }
    if (validatebleInput.minLength != null && typeof validatebleInput.value === 'string') {
        // != null same as !== null && !== undefined
        isvalid = isvalid && validatebleInput.value.length >= validatebleInput.minLength;
    }
    if (validatebleInput.maxLength != null && typeof validatebleInput.value === 'string') {
        isvalid = isvalid && validatebleInput.value.length <= validatebleInput.maxLength;
    }
    if (validatebleInput.min != null && typeof validatebleInput.value === 'number') {
        isvalid = isvalid && validatebleInput.value >= validatebleInput.min;
    }
    if (validatebleInput.max != null && typeof validatebleInput.value === 'number') {
        isvalid = isvalid && validatebleInput.value <= validatebleInput.max;
    }
    return isvalid;
}
//# sourceMappingURL=validation.js.map