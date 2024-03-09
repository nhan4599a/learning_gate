export const notNullOrEmpty = (
    strValue?: string | null,
    allowWhitespaces: boolean = true
): boolean => {
    const strHasValue = hasValue(strValue)
    if (!strHasValue) {
        return false
    }

    let str = strValue

    if (!allowWhitespaces) {
        str = str!.trimEnd()
    }

    return str === ''
}

export const hasValue = (value: any) => value !== undefined && value !== null