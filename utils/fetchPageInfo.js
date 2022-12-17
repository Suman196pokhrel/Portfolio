export const fetchSkills = async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`)
    const data = await res.json()
    const pageInfo = data.pageInfo

    return pageInfo
}