type NmberValueFunc = (value: any) => number

type ValueComparer = (value1: any, value2: any) => boolean

type ArrayLike<TValue> = { [index: number]: TValue, length: number }

export const sum = (array: any[], numberValueSelector?: NmberValueFunc) => {
    if (array.length === 0) {
        return 0
    }

    let result = 0

    if (typeof(array[0]) !== 'number' && !numberValueSelector) {
        throw new Error('Invalid arguments')
    }

    for (const item of array) {
        if (typeof(item) === 'number') {
            result += item
        } else {
            result += numberValueSelector!(item)
        }
    }

    return result
}

export const compare = (
    array1: ArrayLike<any>,
    array2: ArrayLike<any>,
    comparer?: ValueComparer,
    constantTime: boolean = false
) => {
    if (array1.length !== array2.length) {
        return false
    }

    // Default comparer
    comparer ??= (value1, value2) => value1 === value2
    
    const maxIndex = array1.length

    let finalResult = true

    for (let i = 0; i < maxIndex; i++) {
        finalResult = comparer(array1[i], array2[i])

        if (!constantTime && !finalResult) {
            return false
        }
    }

    return finalResult
}