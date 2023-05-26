function toggleDropdown() {
    const dropdown = document.getElementById('myDropdown');
    const arrowIcon = document.getElementById('arrowIcon')
    dropdown.classList.toggle('show');
    arrowIcon.classList.toggle('arrow-up');
}

window.onclick = function(event) {
    if (!event.target.matches('#dropbtn')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        const arrowIcons = document.getElementsByClassName('arrow-up');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            const arrowIcon = arrowIcons[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                arrowIcon.classList.remove('arrow-up');
            }
        }
    }
}