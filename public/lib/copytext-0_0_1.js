const copytextElements = document.getElementsByClassName("copytext")

document.addEventListener("DOMContentLoaded", () => {
    for (const copytextElement of copytextElements) {
        const text = copytextElement.innerText
        copytextElement.innerHTML = `${text} <b>(Click to Copy)</b>`
        copytextElement.addEventListener("mousedown", event => {
            navigator.clipboard.writeText(text)
            copytextElement.innerHTML = `${text} <b>(Copied!)</b>`

            setTimeout(() => {
                copytextElement.innerHTML = `${text} <b>(Click to Copy)</b>`
            }, 1000)
        })
    }
})
