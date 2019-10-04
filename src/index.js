import './scss/main.scss';
import barba from '@barba/core';
import {TweenMax, Power4, Power3} from 'gsap';
import {Routes} from './js/helpers/Router';
import Home from './js/Home';
import Login from './js/Login';

console.log('index ....');

const path = window.location.pathname;
const url = Routes('/');

switch(path) {

    case url.login:
        console.log('se va a LOGIN ...');
        const login = new Login();
    break;
}


barba.init({
    transitions: [{
        name: 'appHoteles',
        leave: function(data) {
            // do something with `current.container` for your leave transition
            // then return a promise or use `this.async()`

            console.log('1...', data);
            console.log('data.current.container: ',data.current.container);

            var done = this.async();            
            TweenMax.to(data.current.container, 0.5, {
                onComplete: done
            });
            
            
        },
        enter: function(data) {

            // do something with `next.container` for your enter transition
            // then return a promise or use `this.async()`
            console.log('2...', data);
            console.log('data.current.container: ',data.next.container);
            const home = new Home();
            var done = this.async();

            TweenMax.from(data.next.container, 0.5, {
                left: '100%',
                //ease: Expo.easeOut,
                ease: Power3.easeOut,
                // ease: Power0.easeNone,
                // ease: SlowMo.ease.config(0.7, 0.7, false),
                // ease: Back.easeOut.config(1),
                // ease: Elastic.easeOut.config(1, 0.5),
                // ease: Power1.easeOut,
                onComplete: done
            });
        }
    }]
});


