import xs from 'xstream'
import moment from 'moment'

const data = [
  {
    id: 1,
    name: 'Прокладка временных коммуникаций',
    start: moment(new Date(2017, 6, 1)),
    finish: moment(new Date(2017, 6, 5)),
    info:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta vel felis non dapibus. Sed ipsum metus, tincidunt ut pretium eget, lobortis vel tortor. Pellentesque mollis maximus dolor vitae tristique. Sed sed ipsum eu risus efficitur sodales et ac metus. Morbi dapibus orci eget tellus molestie, vel dictum arcu dictum. Nunc aliquam nunc id velit bibendum, ut congue mi vehicula. Nunc ornare egestas elit sed pellentesque. Vestibulum eleifend odio sit amet tellus varius feugiat. Duis facilisis condimentum justo, eu consequat libero consectetur sit amet. Nam quam lacus, laoreet et tellus non, lacinia eleifend lorem.',
  },
  {
    id: 2,
    name: 'Устройство котлована',
    start: moment(new Date(2017, 6, 3)),
    finish: moment(new Date(2017, 6, 6)),
    info:
      'Quisque ex metus, gravida in luctus non, fermentum eget nunc. Quisque porttitor condimentum neque, sed faucibus lectus ullamcorper at. Aenean ornare orci at lectus pellentesque lacinia. Curabitur vitae vehicula augue. Sed a ex eget est consectetur fermentum at et leo. Vivamus ante nulla, fringilla quis quam id, pharetra congue enim. Fusce eget placerat nunc, at tincidunt nunc. Donec placerat turpis non lorem eleifend, sed vestibulum risus fringilla. Vivamus a dolor vulputate, facilisis tellus sit amet, vehicula mauris. Cras elementum, magna id varius consectetur, nunc enim condimentum nulla, eget vestibulum lacus lorem aliquet libero. Morbi ligula risus, condimentum et tristique vel, lacinia nec enim. Mauris in diam pellentesque lacus convallis euismod.',
  },
  {
    id: 3,
    name: 'Сооружение строительной базы',
    start: moment(new Date(2017, 6, 15)),
    finish: moment(new Date(2017, 6, 25)),
    info:
      'Proin ac dolor magna. Suspendisse interdum tellus vitae arcu ultrices, at tempus dui convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse consectetur sagittis ante, in bibendum leo. Vestibulum sit amet euismod neque, vitae consectetur neque. Vestibulum eget nibh libero. Nam eget laoreet tellus, a elementum purus. Nulla ut ultrices orci. Nam euismod urna ac auctor mattis.',
  },
  {
    id: 4,
    name: 'Возведение каркаса здания',
    start: moment(new Date(2017, 6, 18)),
    finish: moment(new Date(2017, 7, 2)),
    info:
      'Praesent nulla mauris, cursus sit amet mollis sit amet, viverra nec lacus. Vestibulum et egestas felis. Sed non mollis mauris. Proin sem risus, volutpat eget erat consequat, interdum sagittis tellus. Mauris finibus molestie nibh. Maecenas nec facilisis erat. Vestibulum velit tellus, egestas non felis a, cursus tristique ligula. Phasellus interdum interdum magna, id placerat leo interdum non. Quisque eget vestibulum diam. Vestibulum congue tortor vitae justo eleifend, at sollicitudin diam congue. Suspendisse potenti. In maximus quam eget magna viverra, a ornare nibh molestie. Morbi consectetur facilisis leo eu luctus. Aliquam finibus at turpis a consectetur. Nunc aliquet enim in mattis hendrerit.',
  },
  {
    id: 5,
    name: 'Устройство кровли',
    start: moment(new Date(2017, 6, 29)),
    finish: moment(new Date(2017, 7, 4)),
    info:
      'Sed ultrices sem in nulla semper, eget porttitor dolor porta. Sed finibus fermentum laoreet. Mauris varius, dui at molestie elementum, sapien tellus condimentum lectus, sit amet euismod nisl purus quis massa. Pellentesque ut urna id urna aliquet rhoncus vel eu arcu. Aliquam diam orci, mollis et commodo ut, sodales ac tortor. Phasellus sagittis in justo ut dignissim. Pellentesque varius velit id mi laoreet porttitor.',
  },
]

function model() {
  data.sort((a, b) => a.start > b.start)
  return data
}

export default model
