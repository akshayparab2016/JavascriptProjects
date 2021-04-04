

		//  GET CURRENT SONG ID on clicking album-poster
		$(".album-poster").on('click', function(e){
			var dataSwitchId = $(this).attr('data-switch');
			//console.log(dataSwitchId);

			//use aplayer switch function
			ap.list.switch(dataSwitchId); 

			// aplayer play function to play song when clicked
			ap.play();

			$("#aplayer").addClass('showPlayer'); // click to slideUp the player
		});

		const ap = new APlayer({
		    container: document.getElementById('aplayer'),
		    listFolded: true,
		    audio: [
		    {
		        name: 'Pillow Talk', //Song name
		        artist: 'Zayn malik', //Artist name
		        url: 'source/PILLOWTALK.mp3', //Song url
		        cover: 'images/zayn.jpg' //Album cover
		    },
			{
		        name: 'Girls like you',  
		        artist: 'Maroon 5 ft. Cardi B', 
		        url: 'source/Maroon5.mp3', 
		        cover: 'images/maroon5.jpeg' 
		    },
			{
				name: 'Senorita',
				artist: 'Shawn Mendes & Camila Cabello',
				url: 'source/Senorita.mp3',
				cover: 'images/senorita.jpg',
			},
			{
				name: 'Something just like this',
				artist: 'Chainsmokers & Coldplay',
				url: 'source/Chainsmokers.mp3',
				cover: 'images/chainsmokers.jpg',
			},
// row 2
                {
		        name: 'Alone', // SONG NAME
		        artist: 'Alan walker', //ARTIST NAME
		        url: 'source/Alone.mp3', // PATH NAME AND SONG URL
		        cover: 'images/alone.jpg' // COVER IMAGE
		    },
			{
		        name: 'Hymn for the weekend',  
		        artist: 'Coldplay', 
		        url: 'source/Coldplay.mp3', 
		        cover: 'images/hymn.jpg'
		    },
			{
				name: 'Shape of you',
				artist: 'Ed sheeran',
				url: 'source/shape_of_you.mp3',
				cover: 'images/shape%20of%20you.jpg',
			},
			{
				name: 'Love Me Like You Do',
				artist: 'Ellie Goulding',
				url: 'source/Ellie_Goulding.mp3',
				cover: 'images/lovemelikeyoudo.jpg',
			},
                
// row 3
                {
		        name: 'Solo', // SONG NAME
		        artist: 'Clean Bandit ft. Demi Lovato', //ARTIST NAME
		        url: 'source/Solo.mp3', // PATH NAME AND SONG URL
		        cover: 'images/demi.jpg' // COVER IMAGE
		    },
			{
		        name: 'Work from Home',  
		        artist: 'Fifth Harmony ft. Ty Dolla $ign - 2020', 
		        url: 'source/Fifth_Harmony.mp3', 
		        cover: 'images/5harmony.png' 
		    },
			{
				name: 'Firestone',
				artist: 'Kygo ft. Conrad Sewell',
				url: 'source/Kygo.mp3',
				cover: 'images/kygo.jpg',
			},
			{
				name: 'I Dont Wanna Live Forever',
				artist: 'Zayn & Taylor Swift',
				url: 'source/I_Dont_Wanna_Live_Forever.mp3',
				cover: 'images/taylot.jpg',
			},
                
    // 2000's music
                {
		        name: 'Do you know', // SONG NAME
		        artist: 'Enrique Iglesias', //ARTIST NAME
		        url: 'source/Enrique_Iglesias.mp3', // PATH NAME AND SONG URL
		        cover: 'images/enrique.jpg' // COVER IMAGE
		    },
			{
		        name: 'Show me the meaning',  
		        artist: 'Backstreet Boys', 
		        url: 'source/BSB.mp3', 
		        cover: 'images/BSB.jpg' 
		    },
			{
				name: 'Numb',
				artist: 'Linkin park',
				url: 'source/Numb.mp3',
				cover: 'images/lp.jpg',
			},
			{
				name: 'Smack that',
				artist: 'Akon ft. Eminem',
				url: 'source/Smack_that.mp3',
				cover: 'images/smack.jpg',
			 },
             {
				name: 'Fireflies',
				artist: 'Owl City',
				url: 'source/Fireflies.mp3',
				cover: 'images/owlcity.jpg',
			},
			{
				name: 'Lose yourself',
				artist: 'Eminem',
				url: 'source/Lose_Yourself.mp3',
				cover: 'images/eminem.jpg',
			},   
		    ]
		});


 

