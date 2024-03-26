const init = (el) => {
    let btn = document.createElement('button')
    btn.innerText = 'Click me!';
    el.appendChild(btn);
};

export default init;