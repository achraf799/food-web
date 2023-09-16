<template>
  <section id="Book">
    <div class="container8">
      <h1>Book here</h1>
      <div class="row2">
        <div class="column2">
          <div class="input">
            <h3>How many poaple?</h3>
            <select name="pets" class="select-person">
              <option value>--Please how many poaple</option>
              <option value="1">1 person</option>
              <option value="2">2 persons</option>
              <option value="3">3 persons</option>
              <option value="4">4 persons</option>
              <option value="5">5 persons</option>
            </select>
          </div>
          <div class="input">
            <h3>Name</h3>
            <input type="text" placeholder="Full name" />
          </div>
        </div>
        <div class="column2">
          <div class="input">
            <h3>When is your date?</h3>
            <input type="date" placeholder="Pick a date" />
          </div>
          <div class="input">
            <h3>Email</h3>
            <input type="email" placeholder="Enter your email" />
          </div>
        </div>
        <div class="column2">
          <div class="input">
            <h3>Time</h3>
            <input type="time" placeholder="Pick a time" />
          </div>
          <div class="input">
            <h3>Phone</h3>
            <input type="number" pattern="[0-9]+" placeholder="Enter your number" />
          </div>
        </div>
      </div>
      <div class="input">
        <button>
          <h3>SUBMIT</h3>
        </button>
      </div>
    </div>
    <div class="container9"></div>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>