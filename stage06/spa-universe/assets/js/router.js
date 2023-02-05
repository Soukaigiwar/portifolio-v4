export class Router {

    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }
    
    route(event) {
        event = event || window.event
        event.preventDefault()
        
        window.history.pushState({}, "", event.target.href)
        
        this.handle()
    }
    
    handle() {
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]
        let routeLastName = route.split('/').pop()
        routeLastName = routeLastName.split('.')[0]

        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
            document.querySelector('main').removeAttribute('class')
            document.querySelector('main').classList.toggle(routeLastName)
            })
    }
}
