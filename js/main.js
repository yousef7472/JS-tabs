const tabs = document.querySelectorAll('.button');
tabs.forEach(tab => {
    tab.addEventListener('click', ()=>{
        document.querySelectorAll('.tabContent').forEach(cont => cont.classList.remove('active'))
        document.getElementById(tab.dataset.content).classList.add('active');
    })
})