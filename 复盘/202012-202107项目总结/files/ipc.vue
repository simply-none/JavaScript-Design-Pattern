<script>
let action
function init () {
  if (typeof action === 'function') {
    action()
  }
}
function setAction (f) {
  action = f
}
export default {
  action,
  init,
  setAction
}

</script>