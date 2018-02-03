/* eslint-disable */
export const getElementParents = (elem, selector) => {
    const elements = []
    const isHaveSelector = selector !== undefined

    while ((elem = elem.parentElement) !== null) {
        if (elem.nodeType !== Node.ELEMENT_NODE) {
            continue
        }

        if (!isHaveSelector || elem.matches(selector)) {
            elements.push(elem)
        }
    }

    return elements
}
/* eslint-enable */
