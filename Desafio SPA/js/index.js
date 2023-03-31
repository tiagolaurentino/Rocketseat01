import { Ligar } from "./ligar.js"

const ligou = new Ligar()

ligou.add("/", "/Desafio SPA/pages/home.html")
ligou.add("/universo", "/Desafio SPA/pages/universo.html")
ligou.add("/exploracao", "/Desafio SPA/pages/exploracao.html")
ligou.add(404, "/Desafio SPA/pages/404.html")

ligou.handle()

window.onpopstate = () => ligou.handle()
window.route = () => ligou.route() 