import {groq} from 'next-sanity'
import { sanityClient } from '../../sanity'


const query = groq`
*[_type=='pageInfo'][0]
`


export default async function handler (req,res){
    console.log("Inside api directory for making request to sanity client ")
    const pageInfo  = await sanityClient.fetch(query)
    res.status(200).json({pageInfo})
}