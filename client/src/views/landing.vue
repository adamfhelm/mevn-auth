<template>
  <!-- Page Contents -->
  <div class="container">
    <div class="ui inverted vertical masthead center aligned segment">
      <div class="ui text container">
        <h1 class="ui inverted header">
          MyCompany Dashboard
        </h1>
      </div>
    </div>

    <div class="ui vertical stripe quote segment">
      <div class="ui equal width stackable internally celled grid">
        <div class="center aligned row">
          <div class="column">
            <h3>"Admin"</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Rhoncus dolor purus non enim praesent elementum facilisis.
              Adipiscing enim eu turpis egestas. Cras ornare arcu dui vivamus
              arcu felis. Condimentum id venenatis a condimentum vitae sapien
              pellentesque. Aliquam etiam erat velit scelerisque in dictum.
              Porttitor eget dolor morbi non arcu risus quis varius quam. Vitae
              aliquet nec ullamcorper sit amet risus nullam eget felis.
              Vulputate odio ut enim blandit volutpat maecenas. Convallis a cras
              semper auctor neque vitae. Adipiscing diam donec adipiscing
              tristique. Massa vitae tortor condimentum lacinia quis vel. Sit
              amet est placerat in egestas erat imperdiet sed euismod. Nulla at
              volutpat diam ut venenatis. Eget arcu dictum varius duis at.
              Accumsan sit amet nulla facilisi. Elit scelerisque mauris
              pellentesque pulvinar pellentesque habitant morbi tristique
              senectus. Pretium viverra suspendisse potenti nullam ac. A
              scelerisque purus semper eget duis at. Viverra accumsan in nisl
              nisi scelerisque eu ultrices vitae.
            </p>
          </div>
          <div class="column">
            <h3>"Users"</h3>
            <p>
              <img src="../images/nan.jpg" class="ui avatar image" />
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* masthead*/
.masthead.segment {
  min-height: 250px;
  padding: 1em 0em;
}

.masthead h1.ui.header {
  margin-top: 1.5em;
  margin-bottom: 0em;
  font-size: 4em;
  font-weight: normal;
}

.ui.vertical.stripe {
  padding: 8em 0em;
}
.ui.vertical.stripe h3 {
  font-size: 2em;
}
.ui.vertical.stripe .button + h3,
.ui.vertical.stripe p + h3 {
  margin-top: 3em;
}
.ui.vertical.stripe .floated.image {
  clear: both;
}
.ui.vertical.stripe p {
  font-size: 1.33em;
}
.ui.vertical.stripe .horizontal.divider {
  margin: 3em 0em;
}

.quote.stripe.segment {
  padding: 0em;
}
.quote.stripe.segment .grid .column {
  padding-top: 5em;
  padding-bottom: 5em;
}
</style>
