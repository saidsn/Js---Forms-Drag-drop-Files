



let uploadIcon = document.querySelector(".upload-icon");
let table = document.querySelector(".table")

uploadIcon.addEventListener("click", function () {
    this.nextElementSibling.click();
});
uploadIcon.nextElementSibling.addEventListener("change", function (e) {
    for (const file of e.target.files) {
        let reader = new FileReader();

        reader.onloadend = (event) => {

            let base64 = event.currentTarget.result;

            table.lastElementChild.innerHTML += `<tr>
            <td>${file.name}</td>
            <td>${file.size / 1024} Kb</td>
            <td><img src="${base64}" width="100px" height="100px" alt=""></td>
          </tr>`

        }

        reader.readAsDataURL(file)

    }
})

let uploadImage = document.getElementById("drag-elem");

uploadImage.addEventListener("change", handleImage, false);

function handleImage(e) {
    let reader = new FileReader();
    reader.onload = function (event) {
        $('#blah').attr('src', event.target.result);
    }
    reader.readAsDataURL(e.target.files[0]);
};











