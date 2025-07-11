document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("ExcelForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(
      "https://script.google.com/macros/s/AKfycbxbSMpQDW4J7h1cyuu5mIeSOmvSfJTNqlpbDdqUAVJJlFOdyfMQPcTTFz3pVEDNSjue/exec",
      {
        method: "POST",
        body: formData, // 👈 send as FormData
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.result === "success") {
          alert("Submitted successfully!");
          form.reset();
        } else {
          alert("Submission failed!");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Error submitting the form.");
      });
  });
});
