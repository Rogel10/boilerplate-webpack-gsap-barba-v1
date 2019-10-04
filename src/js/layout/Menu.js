export default class Menu {

    constructor(){

    }

    init(){
        this.render();
    }

    render(){

        const html = `
            <div id="menu-mobile">
                <div id="bg-menu-mobile"></div>
            
                <ul>
                <li>Empresa</li>
                <li>Notícias</li>
                <li>Agenda</li>
                <li>Comunicação</li>
                <li>Contactos</li>
                </ul>
            </div>
        `;

        const content = document.querySelector('.page-home');
        console.log('content: ',content);
        // content.innerHTML(html);

    }
    
}