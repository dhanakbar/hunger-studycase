// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { restaurants } from "../../../data/restaurants"

export default function handler(req, res) {
    if(req.method === 'GET'){
        res.status(200).json(restaurants)
    }else if(req.method === 'POST'){
        res.status(200).json(restaurants)
    }else if(req.method === 'PUT'){
        res.status(200).json(restaurants)
    }else{
        res.status(200).json(restaurants)
    }
}
