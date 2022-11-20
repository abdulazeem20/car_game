import { RightArrow } from './RightArrow.js'
import { LeftArrow } from './LeftArrow.js'

export function Control () {
  let control = $(`
        <div class="control">
       
        </div>
    `)
  control
    .append(LeftArrow({ handleLeftMovement }))
    .append(RightArrow({ handleRightMovement }))
  return control
}

let requirements = ({ car, road }) => {
  let carWidth = car[0].offsetWidth
  let roadOffsetLeft = road.offset().left
  let roadWidth = road[0].offsetWidth
  let spaceToCarLeft = car.offset().left - roadOffsetLeft
  let spaceToCarRight = roadWidth - (spaceToCarLeft + carWidth)
  let nextSpaceTocarRight = spaceToCarRight - carWidth
  let nextSpaceTocarLeft = spaceToCarLeft - carWidth

  return { nextSpaceTocarLeft, nextSpaceTocarRight, carWidth }
}

function handleRightMovement () {
  let parent = $(this).parents('.game-container')
  let car = parent.find('.car.user')
  let road = $('.road')

  const { nextSpaceTocarRight, carWidth } = requirements({ car, road })

  let marginLeft = car.css('margin-left').replace('px', '')
  if (nextSpaceTocarRight <= 0) return

  car.css('margin-left', Number(marginLeft) + Number(carWidth) + 'px')
}

function handleLeftMovement () {
  let parent = $(this).parents('.game-container')
  let car = parent.find('.car.user')
  let road = $('.road')

  const { nextSpaceTocarLeft, carWidth } = requirements({ car, road })

  let marginLeft = car.css('margin-left').replace('px', '')
  if (nextSpaceTocarLeft <= 0) return

  car.css('margin-left', Number(marginLeft) - Number(carWidth) + 'px')
}
