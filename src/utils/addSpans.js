const addSpans = (element) => {
    let content = element.innerHTML
    let chars = content.split('')
    let newHtml = ''

    for (let i = 0; i < chars.length; i++) {
        if(chars[i] != ' ') {
            newHtml += '<span>' + chars[i] + '</span>'
        }
    }

    element.innerHTML = newHtml
}

export default addSpans