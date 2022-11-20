export function LeftArrow ({ handleLeftMovement }) {
  let button = $(`
        <button type="button" class="btn left-control">
            <i class="fa fa-angle-double-left" aria-hidden="true"></i>
        </button>
    `)
  button.on('click', handleLeftMovement)
  return button
}
