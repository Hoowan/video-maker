const readline = require('readline-sync')

function start (){

    const content = {}
    
    content.searchTerm = askAndreturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    function askAndreturnSearchTerm(){
        return readline.question ('Digite um termo para busca no Wikipedia: ')
    }
    
    function askAndReturnPrefix(){
        const prefixes = ['Quem e', 'O que e', 'A historia de']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Escolha uma opcao: ')
        const selectedPrefixText = prefixes[selectedPrefixIndex]
         
        return selectedPrefixText
    }

    console.log(content)

}
start()