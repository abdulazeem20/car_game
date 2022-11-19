function gameTail () {
  let element = $(`
        <div class="start">
            
        </div>
        <div class="control">
            <button type="button" class="btn left-control">
                <i class="fa fa-angle-double-left" aria-hidden="true"></i>
            </button>
            <button type="button" class="btn right-control">
                <i class="fa fa-angle-double-right" aria-hidden="true"></i>
            </button>
        </div>
    `)
  element.find('.right-control').on('click', function () {
    let parent = $(this).parents('.game-container')
    let car = parent.find('.car.user')

    let width = car[0].offsetWidth

    let road = $('.tracks')

    let roadOffsetLeft = road.offset().left

    let roadWidth = road[0].offsetWidth

    let spaceToCarLeft = car.offset().left - roadOffsetLeft
    let spaceToCarRight = roadWidth - (spaceToCarLeft + width)
    let nextSpaceTocarRight = spaceToCarRight - width

    // console.log({
    //   right: spaceToCarRight,
    //   carWidth: width,
    //   roadOffsetLeft: roadOffsetLeft,
    //   nextSpaceTocarRight: spaceToCarRight - width
    // })

    let marginLeft = car.css('margin-left').replace('px', '')
    if (nextSpaceTocarRight <= 0) return
    car.css('margin-left', Number(marginLeft) + Number(width) + 'px')
  })

  element.find('.left-control').on('click', function () {
    let parent = $(this).parents('.game-container')
    let car = parent.find('.car.user')
    let width = car[0].clientWidth

    let road = $('.tracks')

    let roadOffsetLeft = road.offset().left

    let spaceToCarLeft = car.offset().left - roadOffsetLeft
    let marginLeft = car.css('margin-left').replace('px', '')
    let nextSpaceTocarLeft = spaceToCarLeft - width

    // console.log({
    //   left: spaceToCarLeft,
    //   carWidth: width,
    //   roadOffsetLeft: roadOffsetLeft,
    //   nextSpaceTocarLeft: spaceToCarLeft - width
    // })

    if (nextSpaceTocarLeft <= 0) return
    car.css('margin-left', Number(marginLeft) - Number(width) + 'px')
  })
  return element
}