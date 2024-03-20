export const shortText = (text: string, charLen: number) => {
    for (let i=charLen-1; i > 0; i--) {
        if (text.charAt(i) == ' ') {
            return text.slice(0, i) + '...'
        }
    }
    return text.slice(0, charLen)
}