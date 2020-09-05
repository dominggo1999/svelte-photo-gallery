<script>
	//Helper function untuk fetch API ,karena impor pexels nya gak bekerja
	import fetchAPI from './fetchAPI.js';
	
	const r = "563492ad6f91700001000001c993770909174db98ac2ec5061ee0cf6";
	let query;
	let photos;

	const handleSubmit = () =>{
		photos = fetchAPI(r,query,50);
		query = '';
	}

</script>

<main>
	<form on:submit|preventDefault={handleSubmit} class="search-field">
		<input type="text" bind:value={query} placeholder="Find Images">
		<button type="submit">Find</button>
	</form>
	<div class="masonry">
		{#if photos}
			{#await photos}
				<p>Loading</p>
			{:then result}
				{#each result as photo (photo.id)}
					<div class="image-container">
						<a href={photo.src.original} target="_blank">
							<img src={photo.src.large} alt={`Gambar ${photo.id}`}>
						</a>
					</div>
				{/each}	
			{/await}
		{/if}
	</div>
</main>

<style type="text/scss">
	:global(*){
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(body){
		background: #212121;
	} 

	.search-field{
		text-align: center;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-top: 50px;

		input{
			background: none;
			border: solid 2px #fff;
			color: #fff;
			font-size: 20px;
			border-radius: 20px;
			padding: 15px;
			outline: none;
			margin-right: 10px;
		}
	
		
		button{
			display: inline-block;
			background: #E53D46;
			color: #fff;
			font-size: 20px;
			padding:25px 50px;
			outline: none;
			border-radius: 20px;
			border:none;
			cursor: pointer;
		}
	}

	.masonry{
		padding: 50px 40px 80px;
	  	column-count: 3;
	  	column-gap: 1em;
	  	column-fill: auto;

		.image-container{
			width: 100%;
			margin-bottom: 20px;
			cursor: pointer;
			position: relative;
			height: auto;
			border-radius: 20px;
			overflow: hidden;
			&:hover{
				img{
					transform: scale(1.23);
				}
			}

			a{
				display:block;
				width: auto;
				overflow: hidden;
				position: relative;
			}

			img{
				width: 100%;
				height: auto;
				display: flex;
				transition : transform 300ms ease-in-out;
				pointer-events: none;
			}
		}
	}

	@media screen and (max-width:1000px){
		.masonry{
	  		column-count: 2;
		}
	}

	@media screen and (max-width:768px){
		.masonry{
	  		column-count: 1;
		}
	}

</style>