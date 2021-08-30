<template>
  <p class="heading">Hey there, I'm <span>Zach Smith</span>.</p>
  <div class="description">
    I'm a...
    <div class="titles">
      <span>full-stack web engineer</span>
      <span>video editor</span>
      <span>sound designer</span>
    </div>
  </div>
  <p class="welcome">
    Currently based out of <span>Augusta, GA</span>
    and doing <span>full-stack development</span> for enterprise-level clients at
    <a href="https://ruralsourcing.com" target="_blank"><span>Rural Sourcing, Inc.</span></a>
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

.description {
  font-size: 58px;
  font-weight: 500;
  line-height: 1em;
  margin-bottom: 20px;
  text-align: left;

  .titles {
    display: flex;
    flex-direction: column;
  }
}

.welcome {
  font-size: 48px;
  margin-bottom: 30px;
}

span {
  color: rgba(255, 0, 0, 1);
}
</style>