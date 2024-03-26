import ('./bootstrap').then(({default: initApp})=>{
    const el = document.getElementById('root');
    if (el) {
        initApp(el)
    }
})

