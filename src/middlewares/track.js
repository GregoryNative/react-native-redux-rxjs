const track = store => next => action => {
    console.warn(action.type);

    return next(action);
}


export default track;