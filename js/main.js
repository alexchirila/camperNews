function getNews() {
    	$.getJSON("http://www.freecodecamp.com/news/hot", function(json) {
      		var newsResult = JSON.stringify(json);
      		newsResult = JSON.parse(newsResult);

		var html = "";
		newsResult.forEach(function(val) {

			var keys = Object.keys(val);

			var d = new Date(val.timePosted);

			 html += "<div class = 'article'>";

			   html += "<img class = 'author-image' src = '" + val.author.picture + "'>";

			   html += "<div class = 'details'> <a class = 'headline-link' target = '_blank' href = '" + val.link + "'>" + val.headline.substring(0,22) + "...";

			   html += "</a></br>";

			   html += "<div class = 'author'> <a target = '_blank' href = 'http://www.freecodecamp.com/" + val.author.username + "'> added by - " + val.author.username;

			   html += "</a></div></br></br>";

			   html += "<div class = 'loved-by'> upv<span class ='heart'>&#9825</span>ted by " + val.upVotes.length;

			   html += "</div></br>";

			   html += "<div class = 'shared-by'> shared on " + d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear();
			   
			   html += "</div></div>";

  			 html += "</div>";

		});

		$(".news").html(html);

      	});
    }
   
	
    getNews();
    