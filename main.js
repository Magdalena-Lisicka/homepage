
const button = document.querySelector('.action--js');

console.log(button)

button.addEventListener('click', () => {
    const heading = document.querySelector(".main__heading--js");
    heading.innerHTML = `Witaj Drogi Odwiedzajacy, nazaywam sie Magda`;
    console.log(heading.classList.contains('main__heading'));
});


