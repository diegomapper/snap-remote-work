function toggleMenuDropdown() {
    const dropdown = document.getElementById('menuDropdown');
    const arrowIcon = document.getElementById('arrowIcon')
    dropdown.classList.toggle('show');
    arrowIcon.classList.toggle('arrow-up');
}

window.onclick = function(event) {
    if (!event.target.matches('#dropbtn')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
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
}