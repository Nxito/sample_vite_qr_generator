import "./style.css";
import QRCode from "qrcode";

function generate_qr(datos) {
  const qr_container = document.getElementById(" qr_container");

  QRCode.toDataURL(datos, (err, url) => {
    if (err) {
      console.error(err);
      return;
    }

    const imgElement = document.createElement("img");
    imgElement.src = url;

    // Eliminar el código QR anterior, si existe
    while (qr_container.firstChild) {
      qr_container.removeChild(qr_container.firstChild);
    }

    qr_container.appendChild(imgElement);
  });
}

const generate = document.getElementById("generate_qr-btn");

generate.addEventListener("click", () => {
  const urlInput = document.getElementById("urlInput");
  const url = urlInput.value;

  if (url.trim() === "") {
    alert("Por favor, ingresa una URL válida.");
    return;
  }

  generate_qr(url);
});
