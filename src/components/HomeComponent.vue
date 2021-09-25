<template>
  <p class="heading">Hey there, I'm <span class="emphasis">Zach Smith</span>.</p>
  <div class="description">
    I'm a...
    <div class="titles">
      <span class="emphasis">full-stack web engineer</span>
      <span class="emphasis">video editor</span>
      <span class="emphasis">sound designer</span>
    </div>
  </div>
  <p class="welcome">
    Currently based out of <span class="emphasis">Augusta, GA</span>
    and doing <span class="emphasis">full-stack development</span>
    for enterprise-level clients at<br>
    <a href="https://ruralsourcing.com" target="_blank" class="link-underline">Rural Sourcing, Inc.</a>
  </p>
</template>

<script lang="ts">
export default {
  name: 'HomeComponent',
}
</script>
<style lang="scss" scoped>
.heading {
  font-size: 72px;
  font-weight: 700;
  margin: 30px auto 0;
}

.welcome {
  font-size: 48px;
  margin-bottom: 30px;
  text-align: left;
}
</style>