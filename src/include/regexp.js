function RegExpFnc(){
	// get regular expression pattern
	let txt_in = document.getElementById("InputField").value;
	let txt_out = ""

	// read user selection
	let cmd_name = document.getElementById("RegExp").value;
	console.log("cmd_name = " + cmd_name);

	switch (cmd_name) {
		case "Count-Group":
			let int_count = 0;
			const arbitrary_regex = new RegExp(txt_in);
			int_count = (new RegExp(arbitrary_regex.toString() + '|')).exec('').length - 1;
			txt_out = int_count.toString();
			break;

		case "Group-Integers":
			txt_out = txt_in.replaceAll(/[-0-9]+/g, "(\\d+)");
			break;
	  }
	
	// write to output text field.
	document.getElementById("OutputField").value = txt_out;
}

function OutToIn(){
	document.getElementById("InputField").value = document.getElementById("OutputField").value
}