export class Router{
  routes={}
  btns = document.getElementsByTagName("a");
  add(routeName,page){
    this.routes[routeName]=page;
  }
   route(event) {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    this.handle();
    this.active(event.target);
  }
   handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];
    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html;
      });
  }
  
  active(e) {
  for (let i = 0; i < this.btns.length; i++) {
    let current = document.getElementsByClassName("active");
    current[0].classList.remove("active");
    e.classList.add("active");
  }
}

}
const route=new Router()