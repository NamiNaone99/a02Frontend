document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");
  const joinLandCheckbox = document.getElementById("joinLand");

  form.addEventListener("submit", function (event) {
    if (joinLandCheckbox.checked) {
      const confirmJoinLand = confirm("ต้องการซื้อบัตรโดยสารเครื่องบินเองใช่หรือไม่?");
      if (!confirmJoinLand) {
        event.preventDefault();
        return;
      } else {
        alert("คุณเลือกซื้อบัตรโดยสารเครื่องบินเอง");
      }
    }
    event.preventDefault();
    alert("จองสำเร็จ! ระบบจะพาคุณกลับไปหน้าหลัก");
    window.location.href = "index.html";
  });
});
