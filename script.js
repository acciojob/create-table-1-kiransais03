function insert_Row() {
    //Write your code here
  let table=document.getElementById('sampleTable');
	let row=table.insertRow(0);
	row.innerHTML=`<td>New Cell1</td>
                  <td>New Cell2</td>`
}
