document.addEventListener('DOMContentLoaded', function() {
    const heading = document.getElementById('judul');
    const button = document.getElementById('ubahJudul');
    
    let isFirstClick = true;

    button.addEventListener('click', function() {
        if (isFirstClick) {
            heading.textContent = 'Ganteng'; 
        } else {
            heading.textContent = 'Anta'; 
        }
        
        isFirstClick = !isFirstClick;
    });
});
