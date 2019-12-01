const updateItems = (newItems) => {
    return {
        type: 'UPDATE_ITEMS',
        payload: newItems
    };
};

export {
    updateItems
};