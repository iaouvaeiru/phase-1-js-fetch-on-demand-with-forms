const init = () => {
  const form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const userInput = e.target.searchByID.value

    fetch(`http://localhost:3000/movies/${userInput}`)
    .then( res => res.json())
    .then( stuff => {
        appendMovieInfo(stuff)
    })



  })
}

const appendMovieInfo = (input) => {
    let movieName = document.querySelector('h4')
    let movieDetails = document.querySelector('p')
    movieName.innerHTML = input.title
    movieDetails.innerHTML = input.summary
}

document.addEventListener('DOMContentLoaded', init);