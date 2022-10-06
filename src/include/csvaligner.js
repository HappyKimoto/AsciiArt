function AlignCSV(){
	// padding character
	let padding_char = " ";

	// input string separator
	let sep_in = document.getElementById("AlignmentSeparator").value
	console.log("selected separator is " + sep_in + "!");

	let justified_to = document.getElementById("JustifyTo").value
	console.log("justified to is " + justified_to + "!");
	
	// output string separator
	let sep_out = " | ";

	// character to separate header column from data rows
	let col_row_sep_char = "-";
	
	// read lines from input text area
	let lines = document.getElementById("InputField").value.split("\n");
	
	// get column count
	let columns = lines[0].split(sep_in);
	let column_count = columns.length
	console.log("column_count = " + column_count)
	
	// initialize column width array
	let column_widths = []
	for (i = 0; i < column_count; i++)
	{
		column_widths[i] = columns[i].length;
	}
	console.log("column_widths: " + column_widths);
	
	// populate rows array
	const rows = [];
	// index starts from 1 instead of 0
	// because 0 is used as a column
	for (let i = 1; i < lines.length; i++)
	{
		// if line split has the expected column length,
		// add the split array to rows.
		// This if condition guarantees that each array has expected length.
		// This length check is necessary especially when the last row has trailing CRLF.
		let line = lines[i];
		// console.log("line=" + line);
		const row = line.split(sep_in);
		// console.log("row.length=" + row.length);
		if (row.length === column_count)
		{
			rows.push(row);
			// console.log(row);
		}
	}
	// console.log("rows " + rows);
	
	// get max column widths
	for (let i = 0; i < rows.length; i++)
	{
		// read each row
		const row = rows[i];
		console.log("row=" + row)
		// loop through each column
		for (j = 0; j < column_count; j++)
		{
			// update column width if current width is greater
			let this_width = row[j].length;
			if (column_widths[j] < this_width)
			{
				column_widths[j] = this_width;
			}
		}
	}
	console.log("column_widths updated: " + column_widths);

	// --- create output ---
	let str_out = "";
	// create column header
	for (i = 0; i < column_count; i++)
	{
		// header is always left justfied
		str_out += sep_out + columns[i].padEnd(column_widths[i], padding_char);			
	}
	str_out += sep_out + "\n";

	// create separator between header column and data rows.
	for (i = 0; i < column_count; i++)
	{
		str_out += sep_out + col_row_sep_char.repeat(column_widths[i])
	}
	str_out += sep_out + "\n";

	// populate data rows.
	for (i = 0; i < rows.length; i++)
	{
		for (j = 0; j < column_count; j++)
		{
			// left justified regardless of the value type
			if (justified_to == "left"){
				str_out += sep_out + rows[i][j].padEnd(column_widths[j], padding_char);	
			// right justified regardless of the vale type
			}else if(justified_to == "right"){
				str_out += sep_out + rows[i][j].padStart(column_widths[j], padding_char);	
			// auto detect which way to be justified
			}else if(justified_to == "auto"){
				// left justified if the value is not a number
				if (isNaN(rows[i][j])){
					str_out += sep_out + rows[i][j].padEnd(column_widths[j], padding_char);	
				// right justified if the value is a number
				} else {
					str_out += sep_out + rows[i][j].padStart(column_widths[j], padding_char);
				}
			}
		}
		// add the closing separator and new line
		str_out += sep_out + "\n";
	}
	// write to output text field.
	document.getElementById("OutputField").value = str_out;
}