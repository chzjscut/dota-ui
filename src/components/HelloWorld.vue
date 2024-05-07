<template>
  <div class="scroll_wrap" style="overflow: scroll">
    <div class="hello" style="height: 2000px;">
      <div>header</div>
      <dt-breadcrumb>
        <dt-breadcrumb-item :to="{ path: '/'}">一级菜单</dt-breadcrumb-item>
        <dt-breadcrumb-item to="/person">二级菜单</dt-breadcrumb-item>
        <dt-breadcrumb-item>详情</dt-breadcrumb-item>
      </dt-breadcrumb>
      <dt-button type="primary">{{msg}}</dt-button>
      <dt-button type="success" round>{{msg}}</dt-button>
      <dt-backtop target=".scroll_wrap"></dt-backtop>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .scroll_wrap {
    height: 100vh;
  }
</style>
