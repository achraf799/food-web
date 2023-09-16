<template>
  <section id="Plates">
    <div class="container4">
      <div class="title3">
        <h2>India</h2>
        <h1>ON YOUR PLATE</h1>
      </div>
      <div class="Plates-content">
        <div class="row1">
          <img src="../assets/images/5.png" />
          <div class="Plates-content-text">
            <h3>TIKKA CHICKEN</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <h3>$14.95</h3>
          </div>
          <img src="../assets/images/6.png" />
          <div class="Plates-content-text">
            <h3>SPICY WEDGES</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <h3>$10.95</h3>
          </div>
        </div>
        <div class="row1">
          <img src="../assets/images/7.png" />
          <div class="Plates-content-text">
            <h3>CHICKEN CARRY</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <h3>$12.54</h3>
          </div>
          <img src="../assets/images/8.png" />
          <div class="Plates-content-text">
            <h3>RED CURRY</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <h3>$18.95</h3>
          </div>
        </div>
        <div class="row1">
          <img src="../assets/images/9.png" />
          <div class="Plates-content-text">
            <h3>SPICY VIGGES</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <h3>$11.95</h3>
          </div>
          <img src="../assets/images/10.png" />
          <div class="Plates-content-text">
            <h3>SPICY MIX</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <h3>$11.95</h3>
          </div>
        </div>
      </div>
      <carousel :items="1" :nav="false" :loop="true">
        <div class="card2">
          <img src="../assets/images/5.png" />
          <div class="Plates-content-text">
            <h3>TIKKA CHICKEN</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <h3>$14.95</h3>
          </div>
        </div>

        <div class="card2">
          <img src="../assets/images/6.png" />
          <div class="Plates-content-text">
            <h3>SPICY WEDGES</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <h3>$10.95</h3>
          </div>
        </div>

        <div class="card2">
          <img src="../assets/images/7.png" />
          <div class="Plates-content-text">
            <h3>CHICKEN CARRY</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <h3>$12.54</h3>
          </div>
        </div>
        <div class="card2">
          <img src="../assets/images/8.png" />
          <div class="Plates-content-text">
            <h3>RED CURRY</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <h3>$18.95</h3>
          </div>
        </div>
        <div class="card2">
          <img src="../assets/images/9.png" />
          <div class="Plates-content-text">
            <h3>SPICY VIGGES</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <h3>$11.95</h3>
          </div>
        </div>
        <div class="card2">
          <img src="../assets/images/10.png" />
          <div class="Plates-content-text">
            <h3>SPICY MIX</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <h3>$11.95</h3>
          </div>
        </div>
      </carousel>
    </div>
  </section>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  components: { carousel }
};
</script>

<style>
</style>