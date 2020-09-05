const fetchAPI = async (r, query, perPage) => {
	const response = await fetch(`https://api.pexels.com/v1///search?query=${query}&per_page=${perPage}`,{
		 method: "GET",
		 headers : {
		 	Accept: "application/json",
		 	"Content-Type": "application/json",
		 	Authorization: r
		 }
	}).then(res=>res.json()).then(data=>{
		return data.photos
	})

	return response
}

export default fetchAPI;