let going = false;
let currentEl = null;

const lang_buttons = document.querySelectorAll('.lang-button');
const details = document.querySelector('#details');

for (let button of lang_buttons) {
        button.addEventListener('click', () => {
            if (going) return;
            going = true;

            //console.log("button pressed");

            if (button.className.includes('active')) {
                //console.log("button unpressed");
                button.className = 'lang-button';

                let shownPanel = document.querySelector('.lang-panel.shown');
                if (shownPanel) {
                    shownPanel.classList.remove('shown');
                }

                setTimeout(() => {
                    details.classList.remove('gone');
                }, 250);
                
                going = false;
                currentEl = null;
                return;
            }

            if (currentEl) currentEl.className = 'lang-button';
            button.className = 'lang-button active';
            currentEl = button;

            let shownPanel = document.querySelector('.lang-panel.shown');
            if (shownPanel) {
                shownPanel.classList.remove('shown');
            }
            
            details.classList.add('gone');
            setTimeout(() => {
                //console.log(button.getAttribute('data-panel'));
                let panel = document.getElementById(button.getAttribute('data-panel'));
                panel.classList.add('shown');
                going = false;
            }, 500);
        }
    );
}