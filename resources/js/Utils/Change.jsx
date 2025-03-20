export const getUpdatedValues = (values, initial) => {
    const update = {};
    Object.keys(values).forEach((key) => {
        if (values[key] !== initial[key]) {
            update[key] = values[key];
        } else {
            delete update[key];
        }
    });
    return update;
};
