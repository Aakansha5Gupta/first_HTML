function encryptText() {
    let text = document.getElementById("encryptInput").value;
    let encrypted = btoa(text);
    document.getElementById("encryptOutput").value = encrypted;
}

function decryptText() {
    let text = document.getElementById("decryptInput").value;

    try {
        let decrypted = atob(text);
        document.getElementById("decryptOutput").value = decrypted;
    } catch {
        alert("Invalid encrypted text");
    }
}