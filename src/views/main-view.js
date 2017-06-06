import xs from 'xstream'
import { table, th, td, tr, div, p, h2 } from '@cycle/dom'
import moment from 'moment'

function view(actions, data) {
  const minDate = data.length && moment(data[0].start)
  const sortedAsc = [...data]
  sortedAsc.sort((a, b) => a.finish < b.finish)
  const maxDate = sortedAsc.length && moment(sortedAsc[0].finish)
  const days = maxDate.diff(minDate, 'days') + 1
  let months = []
  if (minDate && maxDate && minDate <= maxDate) {
    let currentDay = moment(minDate).startOf('day')
    let currentMonth = moment(currentDay).startOf('month')
    let month = { month: currentMonth.format('MMM YYYY'), days: [] }
    while (currentDay <= maxDate) {
      month.days.push(currentDay.format('DD'))
      let nextDay = moment(currentDay).add(1, 'day')
      let nextMonth = moment(nextDay).startOf('month')
      if (nextDay.isSame(nextMonth) || currentDay.isSame(maxDate)) {
        months.push(month)
        month = { month: nextMonth.format('MMM YYYY'), days: [] }
      }
      currentDay.add(1, 'day')
    }
  }

  return xs.merge(
    xs.of(
      div(
        '.wrapper',
        table('.table', [
          tr('.row', { attrs: { 'data-rowindex': 0 } }, [
            th('.th.taskId', { props: { rowSpan: 2 } }, 'ID работы'),
            th(
              '.th.taskName',
              { props: { rowSpan: 2 } },
              'Наименование работы'
            ),
            th('.th.start', { props: { rowSpan: 2 } }, 'Дата старта'),
            th('.th.finish', { props: { rowSpan: 2 } }, 'Дата финиша'),
            th('.th.duration', { props: { rowSpan: 2 } }, 'Длит. (сут.)'),
            ...months.map(month => {
              return th(
                '.th.month',
                { props: { colSpan: month.days.length } },
                month.month
              )
            }),
          ]),
          tr(
            '.row',
            { attrs: { 'data-rowindex': 1 } },
            months
              .reduce((acc, month) => acc.concat(month.days), [])
              .map(el => th('.th.day', el))
          ),
          ...data.map((row, index) => {
            return tr('.row.data', { attrs: { 'data-rowindex': index + 2 } }, [
              td('.td.taskId.centered', row.id),
              td('.td.taskName', row.name),
              td('.td.start', row.start.format('DD.MM.YYYY')),
              td('.td.finish', row.finish.format('DD.MM.YYYY')),
              td(
                '.td.duration.centered',
                row.finish.diff(row.start, 'days') + 1
              ),
              ...Array(days).fill().map((el, index) => {
                const isMarked = moment(minDate)
                  .add(index, 'day')
                  .isBetween(row.start, row.finish, null, '[]')
                return td(isMarked ? '.marked' : '.empty')
              }),
            ])
          }),
        ])
      )
    ),
    actions.userClickedRow$.map(rowindex => {
      console.log(rowindex)
      return div('.rowDetails', [
        h2('.h2', data[rowindex].name),
        p('.info', data[rowindex].info),
      ])
    })
  )
}

export default view
