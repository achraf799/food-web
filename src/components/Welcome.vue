<template>
  <section id="Welcome">
    <nav class="nav1">
      <div class="title1">
        <h1>BRUNCH</h1>
      </div>
      <ul>
        <li>
          <a href="#Home">WELCOME</a>
        </li>
        <li>
          <a href="#Menu1">MENU</a>
        </li>
        <li>
          <a href="#Book">EVENTS</a>
        </li>
        <li>
          <a href="#Contact">CONTACT</a>
        </li>
      </ul>
    </nav>
    <div class="title2">
      <h1>BRUNCH</h1>
    </div>
    <nav class="navlist" :class="{ open: menuOpen }">
      <ul id="menuList">
        <li>
          <a href="#Home">WELCOME</a>
        </li>
        <li>
          <a href="#Menu1">MENU</a>
        </li>
        <li>
          <a href="#Book">EVENTS</a>
        </li>
        <li>
          <a href="#Contact">CONTACT</a>
        </li>
      </ul>
    </nav>
    <div class="bx bx-menu" id="menu-icon" @click="toggleMenu()">
      <img src="../assets/images/menuIcon.png" alt />
    </div>
    <div class="container1">
      <div class="Welcome_content">
        <h2>Brunch</h2>
        <h1>FULL WEBSITE</h1>
        <button>
          <span>READ MORE</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  },
  mounted() {
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll("nav ul li a");
    const menuLength = menuItem.length;

    for (let i = 0; i < menuLength; i++) {
      if (menuItem[i].href === currentLocation) {
        menuItem[i].classList.add("active");
      }
    }
  }
};
</script>

<style>
</style>