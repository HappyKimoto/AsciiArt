function BoxMsg(){
	// padding character
	let char_pad = " ";
	let char_hrz = "-";
	let char_vrt = "|";
	let char_crn = "+";
	let char_nln = "\n";
	
	let len_max = 0;
	let len_cur = 0;
	
	let str_out;

	// read lines from input text area
	let lines = document.getElementById("InputField").value.replace(/\t/g, "    ").split("\n");

	// get max length
	for (let i = 0; i < lines.length; i++){
		len_cur = lines[i].length;
		if (len_cur > len_max) len_max = len_cur
	}

	// top
	str_out = char_crn + char_hrz.repeat(len_max + 2) + char_crn + char_nln;
	// loop lines
	for (let i = 0; i < lines.length; i++){
		str_out += char_vrt + char_pad + lines[i].padEnd(len_max, char_pad) + char_pad + char_vrt + char_nln;
	}
	// bottom
	str_out += char_crn + char_hrz.repeat(len_max + 2) + char_crn + char_nln;

	// write to output text field.
	document.getElementById("OutputField").value = str_out;
	
}
