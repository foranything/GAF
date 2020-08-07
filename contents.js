function getFormatDate(date) {
  const year = date.getFullYear();
  let month = 1 + date.getMonth();
  month = month >= 10 ? month : "0" + month;
  let day = date.getDate();
  day = day >= 10 ? day : "0" + day;
  return year + "." + month + "." + day;
}
const name = localStorage.getItem("crsdevName");
let text = "";
text += "### Overview\n";
text += "| 항목         | 내용         |\n";
text += "|--------------|:-------------|\n";
text += "| Review Order | 1 |\n";
text += `| Review Date  | ${getFormatDate(new Date())} |\n`;
text += `| Reviewer     | ${name} |\n`;
text += "\n";
text += "### Comments\n";
text += "| No           | Reviewer     | Result       | Comment      |\n";
text += "|--------------|:-------------|:------------:|:-------------|\n";
text += `| 1 | ${name} | Pass | 소스 확인 |\n`;
text += "\n";
text += "### Result (PASS/FAIL/FOLLOWUP)\n";
text += "| Result       | Comment      |\n";
text += "|--------------|:-------------|\n";
text += "| Pass   | |\n";

const target = document.getElementById("merge_request_description");
target.value = text;
