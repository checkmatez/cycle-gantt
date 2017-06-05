import xs from 'xstream'
import moment from 'moment'

function model(actions) {
  const data = [
    {
      id: 1,
      name: 'Прокладка временных коммуникаций',
      start: moment(new Date(2017, 6, 1)),
      finish: moment(new Date(2017, 6, 5)),
    },
    {
      id: 2,
      name: 'Устройство котлована',
      start: moment(new Date(2017, 6, 3)),
      finish: moment(new Date(2017, 6, 6)),
    },
    {
      id: 3,
      name: 'Сооружение строительной базы',
      start: moment(new Date(2017, 6, 15)),
      finish: moment(new Date(2017, 6, 25)),
    },
    {
      id: 4,
      name: 'Возведение каркаса здания',
      start: moment(new Date(2017, 6, 18)),
      finish: moment(new Date(2017, 7, 2)),
    },
    {
      id: 5,
      name: 'Устройство кровли',
      start: moment(new Date(2017, 6, 29)),
      finish: moment(new Date(2017, 7, 4)),
    },
  ]

  data.sort((a, b) => a.start > b.start)

  return data
}

export default model
