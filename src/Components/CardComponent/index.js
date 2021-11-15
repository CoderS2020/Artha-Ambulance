import "./style.css";

export default function CardComponent(props) {
  if (props.type === "left")
    return (
      <div class="container">
        <div class=" left ">
          <div class=" paragraph">
            <h2 class="font_8 ">{props.heading}</h2>
            <p class=" ">{props.body}</p>
          </div>
        </div>
        <div class="right animationcontainer">
          <section class="scroll-container">
            <div class="outer">
              <div class="scroll-element js-scroll fade-in">
                <div class="inner">
                  <img
                    class="img-fluid one animate"
                    alt="bed"
                    id="image"
                    src={props.image}
                    width="100%"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  else
    return (
      <div class="container">
        <div class="left animationcontainer">
          <section class="scroll-container">
            <div class="outer">
              <div class="scroll-element js-scroll fade-in">
                <div class="inner">
                  <img
                    class="img-fluid two "
                    alt="ambulance"
                    src={props.image}
                    width="100% "
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        <div class=" right ">
          <div class="paragraph ">
            <h2 class=" font_8 ">{props.heading}</h2>
            <p class="">{props.body}</p>
          </div>
        </div>
      </div>
    );
}
