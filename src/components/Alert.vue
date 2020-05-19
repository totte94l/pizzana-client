<template>
    <div id="ALRET_DIV" :class="alertType" role="alert">
        <slot>

        </slot>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    type: String
  },
  computed: {
    alertType () {
      return `alert alert-${this.type}`
    }
  }
}
</script>

<style>

</style>
