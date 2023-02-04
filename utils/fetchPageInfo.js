export const fetchPageInfo = async ()=>{

    // console.log("Inside the FetchPageInfo utility function")

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`)
    // const res = await fetch(`http://localhost:3000/api/getPageInfo`)

    console.log("Fetch Sucessful now converting to JSON")
    const data = await res.json()
    const pageInfo = data.pageInfo

    console.log("Inisde PageInfo Helper fetch function")


    // Using AXIOS
    // const data = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`).then((res)=> res.data)
    // console.log(data.pageInfo)
    // const pageInfo = data.pageInfo
    

    return pageInfo
}