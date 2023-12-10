// JavaScript function to scroll to the second section
function scrollToSection2() {
    document
      .getElementById("aboutSection")
      .scrollIntoView({ behavior: "smooth" });
  }

  function scrollToContact() {
    document.getElementById("contactSection").scrollIntoView({
      behavior: "smooth",
    });
  }

  // JavaScript function to expand the box
  function expandBox(boxId) {
    var a = "Kahoot Room";
    var b = "HackerRank";
    var c = "HackerRank";
    var e = boxId + "";
    var f = e.slice(e.length - 1);
    var originalBox = document.getElementById(boxId);
    var expandedBox = document.getElementById("expandedBox");

    let htmlContent1 = `
    <div class="container">
        <button class="back-button" style="margin-left:20px;" onclick="collapseBox(${boxId})">Back</button>
        <div class="box-text">
            <div><h2 class="box-header">Round 1 : <b>APTITUDE CHALLENGE</b></h2></div>
            <div class="points">
                <ul>
                    <li>This event will be conducted on an online platform </li>
                    <li>The quiz consists of 10 questions ranging from medium to hard.</li>
                    <li>Batches of 10 teams at a time will be allowed to participate in the quiz round.</li>
                    <li>At the end of the quiz round, 10 teams will qualify for the next round based on the "fastest fingers first" criteria.</li>
                </ul>
            </div>
            <div class="ready">Ready to play....<a href="https://www.kahoot.com" style="color:lightblue" target="_blank">go to Kahoot Room</a></div>
        </div>
        <div class="box-image">
            <img src="static/r1.jpg" alt="Your Image" style="width: 100%; border-radius: 15px;">
        </div>
    </div>
    `;

    let htmlContent2 = `
    <div class="container">
        <button class="back-button" style="margin-left:20px;" onclick="collapseBox(${boxId})">Back</button>
        <div class="box-text">
            <div><h2 class="box-header" ;>Round 2 : <b>LOGIC ASSEMBLY</b></h2></div>
            <div class="points">
                <ul>
                    <li>This event will be conducted on an online coding platform </li>
                    <li>Students will be provided with the jumbled, unindented, error-ridden syntax code in the form of comments.</li>
                    <li>The selection  criteria will be based on students who fix the code,maintain proper indentation, ans coompile without an errors.</li>
                    <li>At the end of the quiz round, 5 teams will qualify for the next round .</li>
                </ul>
            </div>
            <div class="ready">Ready to play....<a style="color:lightblue"; href="https://www.kahoot.com" target="_blank">go to HackerRank Contest</a></div>
        </div>
        <div class="box-image">
            <img src="static/r2.jpg" alt="Your Image" style="width: 110%;border-radius: 15px;">
        </div>
    </div>
    `;

    let htmlContent3 = `
    <div class="container">
        <button class="back-button" style="margin-left:20px;" onclick="collapseBox(${boxId})">Back</button>
        <div class="box-text">
            <div><h2 class="box-header">Round 3 : <b>CODE REVIVAL</b></h2></div>
            <div class="points">
                <ul>
                    <li>This event will be conducted on an online coding platform </li>
                    <li>Here, a code with "TIME LIMIT EXCEEDED", inefficeincy and lack of optimisation is provided</li>
                    <li>At the end of the quiz round, Students who write and build an optimised , efficient code , among 5 teams, 2 will be declared as WINNERS!</li>
                </ul>
            </div>
            <div class="ready"><b>FINAL...</b>Ready to play....<a href="https://www.kahoot.com" target="_blank" style="color:lightblue" >go to HackerRank Contest</a></div>
        </div>
        <div class="box-image">
            <img src="static/r3.jpg" alt="Your Image" style="width: 110%;border-radius: 15px;">
        </div>
    </div>
    `;

    // Set the innerHTML of expandedBox with the constructed HTML content

    if (f == "1") {
      expandedBox.innerHTML = htmlContent1;
    } else if (f == "2") {
      expandedBox.innerHTML = htmlContent2;
    } else {
      expandedBox.innerHTML = htmlContent3;
    }
    expandedBox.style.display = "flex";
  }

  // JavaScript function to collapse the box
  function collapseBox(boxId) {
    var expandedBox = document.getElementById("expandedBox");
    expandedBox.style.display = "none";
  }

  