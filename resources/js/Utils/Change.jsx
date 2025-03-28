export const getUpdatedValues = (values, initial) => {
    const update = {};
    values.forEach((el, _) => {
        if (values[el] !== initial[el]) {
            update[el] = values[el];
        } else {
            delete update[el];
        }
    });
    return update;
};
