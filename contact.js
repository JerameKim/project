// on load, bind the button for posting
document.addEventListener("DOMContentLoaded", bindSubmitBtns);

function bindSubmitBtns() {
    document
        .getElementById("postBtn")
        .addEventListener("click", function (event) {
            // prevents page refresh on content load
            event.preventDefault();

            var req = new XMLHttpRequest();
            // new payload object
            var payload = {
                name: null,
                email: null,
                trip: null,
            };
            // populate the payload
            payload.name = document.getElementById("name").value;
            payload.email = document.getElementById("email").value;
            payload.trip = document.getElementById("personalityTraits").value;
            // Post to engr URl

            // req.open(
            //     "POST",
            //     " http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php",
            //     true
            // );

            req.open("POST", "http://httpbin.org/post", true);
            // set header type as json
            req.setRequestHeader("Content-Type", "application/json");
            req.addEventListener("load", function () {
                if (req.status >= 200 && req.status < 400) {
                    // parse response
                    var response = JSON.parse(req.responseText);

                    // Console.log the information if it gets posted
                    console.log(response.json);
                    console.log(req.status);
                } else {
                    console.log("Error during POST request: " + req.statusText);
                }
            });
            // send the request
            req.send(JSON.stringify(payload));
        });
}
