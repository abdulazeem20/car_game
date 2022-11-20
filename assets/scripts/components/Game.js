import { Control } from './Control.js'
import { Road } from './Road.js'

// The main component that houses the while Game
export class Main {
  constructor () {
    this.main()
  }

  // the main method
  main () {
    let main = $(`
          <main>
              
          </main>
      `)
    main.append(this.gameContainer())
    $('body').prepend(main)
  }

  /* 
  the container that houses the whole game elements:
  The top :- that houses the score,
  The road :- where the car resides,
  The tail :- that houses the controls
  */
  gameContainer () {
    let section = $(`
          <section class="game-container">
              <div class="head">
                  
              </div>
              <div class="tail">
                  
              </div>
          </section>
      `)
    Road().insertAfter(section.find('.head'))
    section.find('.tail').append(Control)
    return section
  }
}
