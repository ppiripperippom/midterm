document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("fileInput");
    const fileInfo = document.querySelector(".file-info");

    fileInput.addEventListener("change", function () {
        const fileName = this.files[0].name;
        fileInfo.innerHTML = `<p>선택된 파일: ${fileName}</p>`;
    });
});
