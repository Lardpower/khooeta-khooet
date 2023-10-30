
module.exports = (data) => {
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");
  const tblHead = document.createElement("thead");
  const th = document.createElement("tr");
  tbl.classList.add("pure-table");
  
  const fields = _.keys(data[0])

  _.each(fields, field => {
    const cell = document.createElement("td");
    const cellText = document.createTextNode(field);
    cell.appendChild(cellText);
    th.appendChild(cell);
  });

  _.each(data, item => {
    const row = document.createElement("tr");
    _.each(fields, field => {
      const cell = document.createElement("td");
      const cellText = document.createTextNode(item[field]);
      cell.appendChild(cellText);
      row.appendChild(cell);
    });
    tblBody.appendChild(row);
  });
  
  tblHead.appendChild(th);
  tbl.appendChild(tblHead);
  tbl.appendChild(tblBody);
  return tbl;
};