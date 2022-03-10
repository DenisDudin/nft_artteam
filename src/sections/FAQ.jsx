function FAQ() {
  var details = document.querySelectorAll("details");
  for(let i=0;i<details.length;i++) {
    details[i].addEventListener("toggle", accordion);
  }
  function accordion(event) {
    if (!event.target.open) return;
    var details = event.target.parentNode.children;
    for(let i=0;i<details.length;i++) {
      if (details[i].tagName != "DETAILS" || !details[i].hasAttribute('open') || event.target == details[i]) continue;
      details[i].removeAttribute("open");
    }
  }

  return (<section className="faq">
    <div className="faq__container container">
      <h1 className="faq__title title"><span>⁃ FAQ ⁃</span> <br/>Common questions</h1>

      <div className="faq__module">
        <details open>
        <summary>What is a NFT?</summary>
        <p>NFT stands for non-fungible token, which essentially means that it is a one-of-a-kind digital asset that belongs to you and only you. You can use the NFT art created by our company as an exclusive avatar in the Metaverse and serves as a ticket to the network of investors and growth-oriented society.</p>
        </details>
        <details>
        <summary>What is the metaverse?</summary>
        <p> It's a virtual world whose task is to connect people from all over the world into one. It is an analogue of social networks, only much more interesting. In the metaworld it will be possible to hold conferences, buy real estate and even earn money.</p>
        </details>
        <details>
        <summary>What will the mint price be?</summary>
        <p>The mint price will be 0,22 eth</p>
        </details>
        <details>
        <summary>What is the total supply? </summary>
        <p>Our collection has no limitations in our art. We create different characters one by one. Each collection is produced in 1500 pieces of 3D art. This way our company can create very high quality and diverse characters for our future metaverse.</p>
        </details>
        <details>
        <summary>How can I use my NFT?</summary>
        <p>You can use a token from "ArtTeam as an exclusive Avatar in the Metacommunity, and it serves as a ticket to a network of Investors and Society focused on growth in every aspect of our lives. We will also partner with investment companies to ensure that capital will never be an issue for ArtTeam owners with a vibrant business concept.</p>
        </details>
      </div>
    </div>
  </section>)
}

export {FAQ}