function EscChr(){
	// read user selection
	let esc_for = document.getElementById("EscapeFor").value;
	console.log("esc_for = " + esc_for);

	let txt_out = document.getElementById("InputField").value;

	if (esc_for == "VBS-DQ"){
		txt_out = txt_out.replaceAll("\"", "\"\"");
	}




	switch (esc_for) {
		case "VBS-DoubleQuotes":
			txt_out = txt_out.replaceAll("\"", "\"\"");
			break;
		case "XML":
			// | Original character | Escaped character | 
			// | ------------------ | ----------------- | 
			// | "                  | &quot;            | 
			// | '                  | &apos;            | 
			// | <                  | &lt;              | 
			// | >                  | &gt;              | 
			// | &                  | &amp;             | 
			// Order: Ampersand needs to be replaced first!
			let escape_array = [
				["&", "&amp;"],
				["\"", "&quot;"],
				["'", "&apos;"],
				["<", "&lt;"],
				[">", "&gt;"],
			];
			for (let i = 0; i < escape_array.length; i++){
				txt_out = txt_out.replaceAll(escape_array[i][0], escape_array[i][1]);
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
		case "RegExp-Digits":
			txt_out = txt_out.replaceAll(/\d+/g, "(\\d+)");
			break;
	  }

	// write to output text field.
	document.getElementById("OutputField").value = txt_out;
	
}

