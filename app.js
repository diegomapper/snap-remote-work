// Features Dropdown Menu
function toggleFeaturesMenuDropdown() {
    const dropdown = document.getElementById('featuresDropdown');
    const arrowIcon = document.getElementById('arrowFeatures');
    dropdown.classList.toggle('show');
    arrowIcon.classList.toggle('arrow-up');
}

window.addEventListener('click', function(event) {
    if (!event.target.matches('#dropFeatures')) {
        const dropdowns = document.getElementsByClassName('drop-features');
        const arrowIcons = document.getElementsByClassName('arrow-up');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdownMenu = dropdowns[i];
            const arrowIcon = arrowIcons[i];
            if (openDropdownMenu.classList.contains('show')) {
                openDropdownMenu.classList.remove('show');
                arrowIcon.classList.remove('arrow-up');
            }
        }
    }
});

// Company Dropdown Menu
function toggleCompanyMenuDropdown() {
    const dropdown = document.getElementById('companyDropdown');
    const arrowIcon = document.getElementById('arrowCompany');
    dropdown.classList.toggle('show');
    arrowIcon.classList.toggle('arrow-up');
}

window.addEventListener('click', function(event) {
    if (!event.target.matches('#dropCompany')) {
        const dropdowns = document.getElementsByClassName('drop-company');
        const arrowIcons = document.getElementsByClassName('arrow-up');
        for (let i = 0; i < dropdowns.length; i++) {
            const openCompanyMenu = dropdowns[i];
            const arrowIcon = arrowIcons[i];
            if (openCompanyMenu.classList.contains('show')) {
                openCompanyMenu.classList.remove('show');
                arrowIcon.classList.remove('arrow-up');
            }
        }
    }
});