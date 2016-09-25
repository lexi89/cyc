<?php get_header() ?>

<section id = "header">
  <h1>Cheeky yoga club</h1>
  <span id = "arrow"></span>
</section>

<section id = "what-is-it-section" class = "padded-sections">
  <h1 class = "section-headings">What is Cheeky yoga club</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</section>

<section id = "testimonials-section">
  <!-- Slick slider here. -->

</section>


<section id = "pricing-section">
  <h1 class = "section-headings">Pricing</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <table>
    <tr>
      <th>
        <img src="<?php bloginfo('template_directory');?>/assets/img/yoga.svg" alt="" id = "yoga-icon"/>
      </th>
      <th id ="table-header-small">
        Per Class
      </th>
      <th id = "table-header-big">
        Trial class
      </th>
    </tr>

    <tr>
      <td>
        1
      </td>
      <td>
        £10
      </td>
      <td>
        £10
      </td>
      <td>
        £10
      </td>
    </tr>

    <tr>
      <td>
        2
      </td>
      <td>
        £10
      </td>
      <td>
        £10
      </td>
      <td>
        £10
      </td>
    </tr>

    <tr>
      <td>
        3
      </td>
      <td>
        £10
      </td>
      <td>
        £10
      </td>
      <td>
        £10
      </td>
    </tr>

    <tr>
      <td>
        4+
      </td>
      <td>
        £10
      </td>
      <td>
        £10
      </td>
      <td>
        £10
      </td>
    </tr>
    <div class="pink-buttons" id = "book-now">

    </div>
  </table>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</section>


<section id = "booking-section">
  <h1 class = "green-labels" id = "booking-form-header">Booking form</h1>
  <form action="index.php" method="post">
    <label for="name" class = "input-labels">Name</label>
    <input type="text" name="name" value="name" id = "name" class = "booking-inputs">

    <label for="email" class = "input-labels">Email</label>
    <input type="email" name="message" value="message" id = "message" class = "booking-inputs">

    <label for="message" class = "input-labels">Message</label>
    <input
    type="textarea"
    rows = "4"
    columns = "10"
    name="message"
    value="message"
    id = "message"
    class = "booking-inputs">
  </form>

</section>


<?php get_footer() ?>
