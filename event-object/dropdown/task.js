document.addEventListener('DOMContentLoaded', function() {

    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const dropdownValue = dropdown.querySelector('.dropdown__value');
        const dropdownList = dropdown.querySelector('.dropdown__list');
        
        dropdownValue.addEventListener('click', function() {
            dropdownList.classList.toggle('dropdown__list_active');
        });
        
        dropdownList.addEventListener('click', function(e) {
            if (e.target.classList.contains('dropdown__link')) {
                e.preventDefault(); // Запрещаем переход по ссылке
                
                dropdownValue.textContent = e.target.textContent.trim();
                
                dropdownList.classList.remove('dropdown__list_active');
            }
        });
        
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                dropdownList.classList.remove('dropdown__list_active');
            }
        });
    });
});
