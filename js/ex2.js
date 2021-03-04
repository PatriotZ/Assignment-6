const displayText400 = () => {
    const level400Items = Array.from(document.getElementsByClassName("400level"));
    console.log(level400Items)
    level400Items.forEach(item => console.log(item.innerHTML));
}
displayText400();