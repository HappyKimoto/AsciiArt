function RandomAscii() {

	// set array
	const arr = [];
	// numbers
    if (document.getElementById("Numbers").checked == true){
        for (var i = 48; i < 58; i++){
            arr.push(String.fromCharCode(i));
        }
    }
    // upper cases
    if (document.getElementById("UpperCase").checked == true){	
        for (var i = 65; i < 91; i++){
            arr.push(String.fromCharCode(i));
        }
    }
	// lower cases
    if (document.getElementById("LowerCase").checked == true){	
        for (var i = 97; i < 123; i++){
            arr.push(String.fromCharCode(i));
        }
    }

    let total_length = document.getElementById("TotalLength").value

	// create output
	let result = "";
	let rnd;
    if (arr.length > 0){
        for (var i = 0; i < total_length; i++){
            rnd = Math.floor(Math.random() * arr.length);
            result += arr[rnd];
        }
    } else {
        result = "Error: check at least one item."
    }
    let out_text = document.getElementById('OutputField');
    out_text.value = result;
}



