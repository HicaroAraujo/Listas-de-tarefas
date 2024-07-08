const nome = document.getElementById('nome')
const select = document.getElementById('select')
nome.style.paddingLeft = "1%"
const data = new Date()

function adicionar() {

    if (nome.value == "") {
        alert("Digite uma Tarefa por gentileza!")
        nome.focus()
    }
    else {
        const li = document.createElement('li')
        const pendentes = document.getElementById('relacionados')


        li.innerText = nome.value
        if (select.value == "alta") {

            li.style.backgroundColor = "lightcoral"
            li.classList.toggle("editando")


        } else if (select.value == "media") {
            li.classList.toggle("editando")
            li.style.backgroundColor = "rgb(235, 219, 81)"


        } else if (select.value == "baixa") {
            li.classList.toggle("editando")
            li.style.backgroundColor = "rgb(137, 209, 137)"
        }

        // li.style.paddingLeft = "1%"
        const div = document.createElement('div')

        const btnExcluir = document.createElement('button')
        btnExcluir.innerText = 'Excluir'

        // ao clicar no botão remover o li
        btnExcluir.addEventListener('click', function () {
            li.remove()
        })

        const btnConcluir = document.createElement('button')
        btnConcluir.innerText = 'Concluir'
        btnConcluir.addEventListener('click', function () {
            li.remove()

            const concluidas = document.getElementById('concluidas')

            // puxei o id da ul e coloquei o li dentro da ul 
            const relacionados = document.getElementById('relacionados')
            relacionados.appendChild(li)

            const span = document.createElement("span")
            span.classList.add('data')
            span.innerText = ` Concluída em 0${data.getDate()}/0${(data.getMonth() + 1)}/${data.getFullYear()}  ${data.getHours()}:${data.getMinutes()}`
            li.insertBefore(span, div)
            concluidas.appendChild(li)
            btnConcluir.style.backgroundColor = "transparent"
            btnConcluir.innerText = ""

        })

        div.appendChild(btnConcluir)
        div.appendChild(btnExcluir)
        li.appendChild(div)




        btnConcluir.classList.add('btn1')
        li.classList.toggle("divisao")
        btnExcluir.classList.add('btn2')




        pendentes.appendChild(li)

    }


}










//   document.getElementById("demo").innerHTML = "Date : " + Date();
//  <button onclick="displayDate()">Try it</button>








