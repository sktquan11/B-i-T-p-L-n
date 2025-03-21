document.querySelectorAll('.text-overlay').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = "red";
    });
    item.addEventListener('mouseout', () => {
        item.style.color = "black";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    console.log("Website đã tải xong!");
});
