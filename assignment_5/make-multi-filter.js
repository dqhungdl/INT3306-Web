function makeMultiFilter(array) {
    let saveArray = array;
    return function arrayFilterer(filterCriteria, callback) {
        if (typeof filterCriteria === 'function') {
            array = array.filter(filterCriteria);
            if (typeof callback === 'function')
                callback.call(saveArray, array);
            return arrayFilterer;
        } else
            return array;
    }
}