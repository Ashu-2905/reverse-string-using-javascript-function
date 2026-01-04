function reverseString(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

function reverseText() {
    let input = document.getElementById("inputString").value;
    let output = document.getElementById("output");

    if (input === "") {
        output.innerHTML = "❌ Please enter a string";
        return;
    }

    let result = reverseString(input);
    output.innerHTML = "Reversed String: " + result;
}
