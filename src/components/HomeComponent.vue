<template>
  <p class="heading">Hey there, I'm <span>Zach Smith</span>.</p>
  <p class="description">
    I'm a
    <span>front-end web engineer</span>,
    <span>back-end API dev</span>,
    and also have a knack for<br>
    <span>sound design.</span>
  </p>
  <p class="welcome">
    I'm currently based out of
    <span>Augusta, GA</span>
    and work at <a href="https://ruralsourcing.com" target="_blank"><span>Rural Sourcing, Inc.</span></a>
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
}

.welcome {
  font-size: 48px;
  margin-bottom: 30px;
  
    a {
      &:hover {
        span {
          color: rgba(102, 0, 0, 0.8);
        }
      }
    }
}

.selection-container {
  width: 50%;
  margin: auto;
  font-size: 32px;

  .options-container {
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
  }
}

span {
  color: rgba(255, 0, 0, 1);
  transition: color 0.2s ease-out;
}
</style>