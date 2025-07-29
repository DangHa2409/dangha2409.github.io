function submitEmail() {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const name = document.getElementById("name-email").value;
    const error = document.getElementById("error-email");
    const check = name.match(regex);
    const pthongtin = document.querySelector(".pthongtin");
    const submit = document.querySelector(".submit-email");
    if (check) {
      pthongtin.style.display = "block";
      submit.style.display = "none";
    } else {
      error.innerHTML = "Vui lòng nhập đúng định dạng email";
      error.style.color = "red";
    }

  }

