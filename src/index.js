import './styles.scss'
import img from './pikachu.png'

function titleComponent() {
    const element = document.createElement('h1')

    element.innerHTML = 'Hello World'
    element.classList.add('title')
    return element
}

function imageComponent(){
    const eleImg = new Image(1200,800)
    eleImg.src = img

    return eleImg
}

document.body.appendChild(titleComponent())
document.body.appendChild(imageComponent())