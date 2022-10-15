function EscChr(){
	// read user selection
	let esc_for = document.getElementById("EscapeFor").value;
	console.log("esc_for = " + esc_for);

	let txt_out = document.getElementById("InputField").value;

	if (esc_for == "VBS-DQ"){
		txt_out = txt_out.replaceAll("\"", "\"\"");
	}

	// | Original character | Escaped character | 
	// | ------------------ | ----------------- | 
	// | "                  | &quot;            | 
	// | '                  | &apos;            | 
	// | <                  | &lt;              | 
	// | >                  | &gt;              | 
	// | &                  | &amp;             | 
	// Order: Ampersand needs to be replaced first for escaping.
	let escape_array = [
		["&", "&amp;"],
		["\"", "&quot;"],
		["'", "&apos;"],
		["<", "&lt;"],
		[">", "&gt;"],
	];

	switch (esc_for) {
		case "VBS-EscapeQuotes":
			txt_out = txt_out.replaceAll("\"", "\"\"");
			break;
		case "VBS-UnescapeQuotes":
			txt_out = txt_out.replaceAll("\"\"", "\"");
			break;
		case "VBS-LinesToJoinedArray":
			// escape double quotes
			txt_out = txt_out.replaceAll("\"", "\"\"");
			// create lines
			let lines = txt_out.split("\n")
			// initialize text output
			txt_out = "Join(Array( _\n"
			// loop through lines before the last line
			for (let i = 0; i < lines.length - 1; i++){
				txt_out += "\"" + lines[i] + "\", _" + "\n"
			}
			// add last line and closing
			txt_out += "\"" + lines[lines.length - 1] +"\"), vbCrlf)"
			break;
		case "XML":
			for (let i = 0; i < escape_array.length; i++){
				txt_out = txt_out.replaceAll(escape_array[i][0], escape_array[i][1]);
			}
			break;
		case "XML-Rev":
				for (let i = 0; i < escape_array.length; i++){
					txt_out = txt_out.replaceAll(escape_array[i][1], escape_array[i][0]);
				}
				break;
		case "RegExp-Parentheses":
			txt_out = txt_out.replaceAll("(", "\\(");
			txt_out = txt_out.replaceAll(")", "\\)");
			break;
		case "RegExp-Brackets":
			txt_out = txt_out.replaceAll("[", "\\[");
			txt_out = txt_out.replaceAll("]", "\\]");
			break;
	  }

	// write to output text field.
	document.getElementById("OutputField").value = txt_out;
	
}

