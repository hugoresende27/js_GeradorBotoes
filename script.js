const tagsEl = document.getElementById('tags')
const texto = document.getElementById('txtArea')

texto.focus()/* QUANDO CARREGA A PÁGINA O CURSOR FICA A PISCAR NA TEXTBOX, FOCUS */

texto.addEventListener('keyup', (e) => {/*FUNÇÃO QUANDO SE SOLTA A TECLA */
    criarTags(e.target.value)/*FUNÇÃO criarTags CONSOLE.LOG DA TECLA DE 'keyup' */

    if(e.key === 'Enter') {
        setTimeout( () => {
            e.target.value = ''
        }, 10 )/*ACONTECE A CADA 10ms */

        escolhaRandom()
    }
})
/*
## The split() method splits a string into an array of substrings, and returns the array.
If (" ") is used as separator, the string is split between words.
## The split() method does not change the original string.
## The filter() method creates a new array with all elements that pass the test implemented by the provided function.
## The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
*/

function criarTags ( input ) {
    console.log(input)
    const tags = input.split(',')/*VAI CRIAR UM ARRAY CADA VIRGULA 1 INDEX */
    .filter(tag => tag.trim() !== '')
    .map(tag=>tag.trim()) /*TRIM NOS ESPAÇOS EM BRANCO E NO CASO DE , ,  */
    console.log(tags)

    tagsEl.innerHTML='' /*LIMPAR AS TAGS */
    
    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })

}

function escolhaRandom () {
    //console.log(123)
    const vezes = 30

    const intervalo = setInterval ( () => {
        const randomTag = pickRandomTag()
    
        highlighTag(randomTag)
        setTimeout( () => {
            unHighlighTag(randomTag)
        },100)
    
    }, 100)/*ACONTECE A CADA 100ms */

    setTimeout( () => {
        clearInterval(intervalo)

        setTimeout( ()=> {
            const randomTag = pickRandomTag()
            highlighTag(randomTag)
        },100)
    },vezes * 100)
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags [Math.floor(Math.random()*tags.length)]
}

function highlighTag(tag){
    tag.classList.add('realce')
}
function unHighlighTag(tag){
    tag.classList.remove('realce')
}
