function openImage(src, alt) {
    const dialog = document.getElementById("imageModal");
    const img = document.getElementById("modalImage");

    img.src = src;
    img.alt = alt;

    dialog.showModal();
}

document.getElementById("imageModal").addEventListener("click", function () {
    this.close();
});