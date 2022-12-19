export const fetchPageInfo = async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`)
    const data = await res.json()
    const pageInfo = data.pageInfo

    console.log("Inisde PageInfo Helper fetch function")

    return pageInfo
}