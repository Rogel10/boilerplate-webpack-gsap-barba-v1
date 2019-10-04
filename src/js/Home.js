import Menu from '../js/layout/Menu';

export default class Home {

    constructor(){
        this.props = {
        }

        this.init()
    }

    init() {

        this.onkeypressEvents();
    }
    
    onkeypressEvents(){
        
        document.querySelector('.icon-menu').addEventListener('click', (e) => {
            console.log('click al boton');
            const menu = new Menu();
            menu.init();
        });

    }

}