<template>
  <TheHeader />
  <div class="contaitner-fluid mt-3">
    <!-- dashboard -->
    <div class="row">
      <div class="col-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
 
  <TheFooter />
</template>
<script>
import TheHeader from '../components/TheHeader.vue';

import TheFooter from '../components/TheFooter.vue';

export default {
  components: {
    TheHeader,
  
    // TheMenu,
    TheFooter
  },
};
</script>

<style>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
</style>

