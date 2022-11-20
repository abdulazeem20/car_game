export function Car ({ src, type, pos }) {
  let car = $(`
          <div class="car  ${pos ?? ''} ${type} ">
              <img src = "./assets/images/${src}" alt = "" >
          </div >
      `)
  return car
}
