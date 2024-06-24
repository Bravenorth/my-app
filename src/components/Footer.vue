<template>
  <footer>
    <p>&copy; 2024 My App</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
footer {
  background-color: var(--primary-color);
  padding: var(--padding);
  text-align: center;
  border-top: 1px solid var(--secondary-color);
  width: 100%;
  box-shadow: var(--box-shadow);
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
