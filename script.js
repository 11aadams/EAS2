document.addEventListener('DOMContentLoaded', function() {
    fetch('quotes.txt')
        .then(response => response.text())
        .then(text => {
            const quotes = text.split('\n');
            const dailyQuote = quotes[Math.floor(Math.random() * quotes.length)];
            document.getElementById('daily-quote').textContent = dailyQuote;
        })
        .catch(error => console.error('Error fetching quotes:', error));
});


document.addEventListener('DOMContentLoaded', function() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
});




document.addEventListener('DOMContentLoaded', function() {
    fetch('views.txt')
        .then(response => response.text())
        .then(text => {
            document.getElementById('text-content').textContent = text;
        })
        .catch(error => console.error('Error fetching text:', error));
});

