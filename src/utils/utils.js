export const numberBetweenZeroAndOne = (props, propName, componentName) => {
    if (props[propName]) {
        let value = props[propName]
        if (typeof value !== 'number')  return new Error(`${propName} in ${componentName} is not a number`)
        if (value < 0 || value > 1) return new Error(`${propName} in ${componentName} should have a value between 0 and 1 included`)
    } else {
        return new Error(`${propName} in ${componentName} is required`)
    }
}

