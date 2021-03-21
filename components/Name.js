export default function Name() {
    return (
        <section id="main">
      {/* <!--navigation--------------------------------> */}
      
      {/* <!--name---------------------------> */}
      <div class="name">
        {/* <!--hello-------> */}
        <p>Hello</p>
        {/* <!--name---> */}
        <h1>I'm <font color="#DAA298">Velizha</font> Ayu</h1>
        {/* <!--details---------------> */}
        <p class="details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          adipisci iure ducimus ea sint reiciendis consequatur vitae nesciunt
          veniam quo. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        {/* <!--cv button--------------------> */}
        <a href="./Velizha CV.pdf" class="cv-btn" download>Download CV</a>
      </div>
      {/* <!--down arrow--------------> */}
      <div class="black-line"></div>
      {/* <!--social----------------> */}
      <div class="social">
        <a href="https://wa.me/+62895801035573"
          ><i class="fab fa-whatsapp"></i
        ></a>
        <a href="mailto:velizhaar@gmail.com"><i class="fas fa-envelope"></i></a>
        <a href="https://github.com/velizhaar"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/velizhaar"
          ><i class="fab fa-linkedin"></i
        ></a>
      </div>
      <div class="about-model">
        <img src="images/bg.png" alt="model" />
      </div>
    </section>
    )
}
