var parser = require('html2hscript')
var html = `
<table>
    <tr>
      <th rowspan="2">ID работы</th>
      <th rowspan="2">Наименование работы</th>
      <th rowspan="2">Дата старта</th>
      <th rowspan="2">Дата финиша</th>
      <th rowspan="2">Длит. (сут.)</th>
      <th colspan="5">Июнь 2017</th>
      <th colspan="5">Июль 2017</th>
    </tr>
    <tr>
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <th>4</th>
      <th>5</th>
      <th>6</th>
      <th>7</th>
      <th>8</th>
      <th>9</th>
      <th>10</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Прокладка временных коммуникаций</td>
      <td>15.06.2017</td>
      <td>16.06.2017</td>
      <td>2</td>
      <td></td>
      <td class="activeCell"></td>
      <td class="activeCell"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </table>
`

parser(html, function(err, hscript) {
  console.log(hscript)
})
