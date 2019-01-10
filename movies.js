
//1. create a variable with new object XMLHttpRequest to make http request
var request = new XMLHttpRequest();

//2. open new connection with GET, URL, and true for asynchroniuos
request.open('GET', 'https://api.themoviedb.org/3/discover/movie?api_key=83d455d79e029c1f0a4827dba873f787&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1', true);

//3. collect data with onload function.
request.onload = function () {

	//4. data will be in JSON. Convert it to js objects with JSON.parse.
    var data = JSON.parse(this.response);
   
//5. go through each data but also wrap the code with if to handle erros
    if (request.status >= 200 && request.status < 400) {

			const title1 = document.getElementById('title1');
			title1.textContent=data.results[0].title;

			const desc1 = document.getElementById('text1');
			desc1.textContent=data.results[0].overview;

			const im1 = document.getElementById('im1');
			im1.textContent="Released on:  "+ data.results[0].release_date;

			const img1 = document.getElementById('img1');
			img1.src="https://image.tmdb.org/t/p/w500/"+data.results[0].poster_path;
			const poster1 = img1.src;
			img1.alt="My Poster";



			const title2 = document.getElementById('title2');
			title2.textContent=data.results[1].title;

			const desc2 = document.getElementById('text2');
			desc2.textContent=data.results[1].overview;

			const im2 = document.getElementById('im2');
			im2.textContent="Released on:  "+ data.results[1].release_date;

			const img2 = document.getElementById('img2');
			img2.src="https://image.tmdb.org/t/p/w500/"+data.results[1].poster_path;
			img2.alt="My Poster";


			const title3 = document.getElementById('title3');
			title3.textContent=data.results[2].title;

			const desc3 = document.getElementById('text3');
			desc3.textContent=data.results[2].overview;

			const im3 = document.getElementById('im3');
			im3.textContent="Released on:  "+ data.results[2].release_date;

			const img3 = document.getElementById('img3');
			img3.src="https://image.tmdb.org/t/p/w500/"+data.results[2].poster_path;
			img3.alt="My Poster";



			const title4 = document.getElementById('title4');
			title4.textContent=data.results[3].title;

			const desc4 = document.getElementById('text4');
			desc4.textContent=data.results[3].overview;

			const im4 = document.getElementById('im4');
			im4.textContent="Released on:  "+ data.results[3].release_date;

			const img4 = document.getElementById('img4');
			img4.src="https://image.tmdb.org/t/p/w500/"+data.results[3].poster_path;
			img4.alt="My Poster";



			const title5 = document.getElementById('title5');
			title5.textContent=data.results[4].title;

			const desc5 = document.getElementById('text5');
			desc5.textContent=data.results[4].overview;

			const im5 = document.getElementById('im5');
			im5.textContent="Released on:  "+ data.results[4].release_date;

			const img5 = document.getElementById('img5');
			img5.src="https://image.tmdb.org/t/p/w500/"+data.results[4].poster_path;
			img5.alt="My Poster";


			const title6 = document.getElementById('title6');
			title6.textContent=data.results[5].title;

			const desc6 = document.getElementById('text6');
			desc6.textContent=data.results[5].overview;

			const im6 = document.getElementById('im6');
			im6.textContent="Released on:  "+ data.results[5].release_date;

			const img6 = document.getElementById('img6');
			img6.src="https://image.tmdb.org/t/p/w500/"+data.results[5].poster_path;
			img6.alt="My Poster";
	
		
		} else {
				console.log('error');
				}
};

//4. once set-up is done send the request now...

request.send();
