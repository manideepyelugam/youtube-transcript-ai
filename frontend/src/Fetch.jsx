const Fetch = async(url) => {
    try {
        const res = await fetch(`http://localhost:4000/api/transcript/${url}`)
        if(!res.ok){
            throw new Error('failed to fetch transcript');
        }
        const response =await res.json();
        const data = response.map(seg => seg.text).join(' ');

        return data;
    } catch (error) {
        console.log(error);
        throw error
        
    }
}

export default Fetch;