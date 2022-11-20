import { Car } from './Car.js'

export function Road () {
  let container = $(`
          <div class="road">
              <div class="tracks">
                  
              </div>
          </div>
      `)
  // Loops for creating the tracks on the road
  for (let i = 1; i <= 12; i++) {
    let track = $(`<div class="track"></div>`)
    container.find('.tracks').append(track)
  }

  container.append(Car({ src: 'carred.png', type: 'user' }))
  return container
}
