<template>
  <div id="app">
    <top-bar/>
    <router-view/>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar';

export default {
  name: 'app',
  components: {
    'top-bar': TopBar,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
