export function Main () {
  let main = $(`
        <main>
            
        </main>
    `)
  main.append(gameContainer())
  $('body').prepend(main)
}

function gameContainer () {
  let section = $(`
        <section class="game-container">
            <div class="head">
                
            </div>
            <div class="tail">
                
            </div>
        </section>
    `)
  road().insertAfter(section.find('.head'))
  section.find('.tail').append(gameTail())
  return section
}

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

function road () {
  let container = $(`
        <div class="road">
            <div class="tracks">
                
            </div>
        </div>
    `)

  for (let i = 1; i <= 12; i++) {
    let track = $(`<div class="track"></div>`)
    container.find('.tracks').append(track)
  }
  container.append(Car('carred.png', 'user'))
  return container
}

function Car (src, type = '', pos = '') {
  let car = $(`
        <div class="car  ${pos.concat(' ', type)} ">
            <img src = "./assets/images/${src}" alt = "" >
        </div >
    `)
  return car
}
