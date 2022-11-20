export function RightArrow ({ handleRightMovement }) {
  let button = $(`
    <button type="button" class="btn right-control">
        <i class="fa fa-angle-double-right" aria-hidden="true"></i>
    </button>
    `)
  button.on('click', handleRightMovement)
  return button
}
