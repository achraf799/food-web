<template>
  <div id="Home">
    <welcome />
    <Flavour />
    <News />
    <Plates />
    <Cuisine />
    <Menu1 />
    <Book />
    <Menu2 />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Welcome from "../components/Welcome.vue";
import Flavour from "../components/Flavour.vue";
import News from "../components/News.vue";
import Plates from "../components/Plates.vue";
import Cuisine from "../components/Cuisine.vue";
import Menu1 from "../components/Menu1.vue";
import Book from "../components/Book.vue";
import Menu2 from "../components/Menu2.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Welcome,
    Flavour,
    News,
    Plates,
    Cuisine,
    Menu1,
    Book,
    Menu2,
    Contact,
    Footer
  }
};
</script>

