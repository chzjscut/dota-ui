<template>
  <!--  aria-label="Breadcrumb" role="navigation" -->
  <div class="el-breadcrumb">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'DtBreadcrumb',

    props: {
      separator: {
        type: String,
        default: '/'
      },
      separatorClass: {
        type: String,
        default: ''
      }
    },

    provide() {
      return {
        elBreadcrumb: this
      }
    },

    mounted() {
      const items = this.$el.querySelectorAll('.el-breadcrumb__item');
      if (items.length) {
        items[items.length - 1].setAttribute('aria-current', 'page');
      }
    }
  }
</script>