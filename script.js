/**
 * Toggles the visibility of a tutorial section
 * @param {string} id - The ID of the element to show/hide
 */
function toggleSection(id) {
    const content = document.getElementById(id);
    const icon = document.getElementById(id + '-icon');

    // Check if the section is already open
    if (content.classList.contains('active')) {
        content.classList.remove('active');
        icon.textContent = '+';
    } else {
        // Open the selected section
        content.classList.add('active');
        icon.textContent = '-';
    }
}