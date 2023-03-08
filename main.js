let resButt = document.querySelector('button')
let div = document.querySelector('div')
function residentButton(e){
    console.log('button clicked')

    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
    .then((response) => { 
        console.log(response.data)
       let residents = response.data.results[0].residents
      for(let i = 0; i < residents.length; i++){
        axios.get(residents[i]).then((response) => {
            console.log(response.data.name)
            let name = response.data.name
           let list = document.createElement('div')
           list.innerHTML = `
           <h2>${name}</h2>
           <h1>${name}</h1>
           <button>delete</button>
           `
           //let list = document.createElement('h2')
           //list.textContent = name
            div.appendChild(list)
        })
      }
})
}
resButt.addEventListener('click',residentButton)