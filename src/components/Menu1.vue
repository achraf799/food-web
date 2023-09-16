<template>
  <section id="Menu1">
    <div class="container6">
      <div class="container6-content">
        <div class="title3">
          <h2>Discover</h2>
          <h1>OUR NEW MENU</h1>
        </div>
        <div class="Menu1-content">
          <div class="column1">
            <div class="column1-content">
              <img src="../assets/images/14.png" />
              <div class="column1-text">
                <h3>TIKKA CHICKEN</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet.
                  <span>$14.95</span>
                </p>
              </div>
            </div>
            <div class="column1-content">
              <img src="../assets/images/15.png" />
              <div class="column1-text">
                <h3>SPICY WEDGES</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet.
                  <span>$14.95</span>
                </p>
              </div>
            </div>
            <div class="column1-content">
              <img src="../assets/images/16.png" />
              <div class="column1-text">
                <h3>CHICKEN CARRY</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet.
                  <span>$14.95</span>
                </p>
              </div>
            </div>
          </div>
          <div class="column1">
            <div class="column1-content">
              <img src="../assets/images/16.png" />
              <div class="column1-text">
                <h3>RED CURRY</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet.
                  <span>$14.95</span>
                </p>
              </div>
            </div>
            <div class="column1-content">
              <img src="../assets/images/17.png" />
              <div class="column1-text">
                <h3>SPICY VIGGES</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet.
                  <span>$14.95</span>
                </p>
              </div>
            </div>
            <div class="column1-content">
              <img src="../assets/images/18.png" />
              <div class="column1-text">
                <h3>SPICY MIX</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet.
                  <span>$14.95</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <carousel :items="1" :nav="false" :loop="true">
          <div class="card3">
            <img src="../assets/images/14.png" />
            <div class="column1-text">
              <h3>TIKKA CHICKEN</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet.
                <span>$14.95</span>
              </p>
            </div>
          </div>

          <div class="card3">
            <img src="../assets/images/15.png" />
            <div class="column1-text">
              <h3>SPICY WEDGES</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet.
                <span>$14.95</span>
              </p>
            </div>
          </div>

          <div class="card3">
            <img src="../assets/images/16.png" />
            <div class="column1-text">
              <h3>CHICKEN CARRY</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet.
                <span>$14.95</span>
              </p>
            </div>
          </div>
          <div class="card3">
            <img src="../assets/images/18.png" />
            <div class="column1-text">
              <h3>SPICY VIGGES</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet.
                <span>$14.95</span>
              </p>
            </div>
          </div>
          <div class="card3">
            <img src="../assets/images/17.png" />
            <div class="column1-text">
              <h3>SPICY VIGGES</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet.
                <span>$14.95</span>
              </p>
            </div>
          </div>
          <div class="card3">
            <img src="../assets/images/18.png" />
            <div class="column1-text">
              <h3>SPICY MIX</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet.
                <span>$14.95</span>
              </p>
            </div>
          </div>
        </carousel>
      </div>
    </div>
    <div class="container7"></div>
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