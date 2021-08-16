import _ from "lodash";

export function keyBy<T>(list: T[], iteratee?: (x: T) => void) {
    return _.keyBy(list, iteratee);
};

export function isNull(value: any): boolean {
    return _.isNull(value);
}

export function isUndefined(value: any): boolean {
    return _.isUndefined(value);
}

export function isNaN(value: any): boolean {
    return _.isNaN(value);
}

export function isNumber(value: any): boolean {
    return _.isNumber(value);
}