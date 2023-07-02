let randomQuotes = [
    "Lorem ipsum dolor sit amet consectetur, adipiscing elit at litora.",
    "Lorem ipsum dolor sit amet consectetur, adipiscing elit magnis tempor.",
    "Lorem ipsum dolor sit amet consectetur, adipiscing elit himenaeos odio.",
    "Lorem ipsum dolor sit amet consectetur, adipiscing elit vivamus platea.",
    "Lorem ipsum dolor sit amet consectetur, adipiscing elit convallis neque."
];

let quoteContent = document.querySelector(".quote-content")

let generateBtn = document.querySelector(".generate")

generateBtn.addEventListener("click", ()=>{
    let randomNumber = Math.floor(Math.random() * randomQuotes.length)
    quoteContent.innerHTML = randomQuotes[randomNumber]
})

