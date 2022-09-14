import { restaurants } from "../../../data/restaurants";

export default function userHandler(req, res) {
    const id = req.query.idResto
    const method = req.method
    let { location, name, rating, image, description} = req.body
    const filtered = restaurants.filter( restaurant => id == restaurant.id)

    switch (method) {
        case 'GET':
            if(filtered.length>0) res.status(200).json(filtered)
            else res.status(404).json({ message: "Restaurant Not Found" })
            break
        case 'PUT':
            if(filtered.length>0){
                res.status(200).json({
                    id: filtered.id,
                    location,
                    name,
                    rating,
                    image,
                    description
                })
            } else{
                res.status(404).json({
                    message: "Restaurant Not Found"
                })
            }
            break
        case 'DELETE':
            if (filtered.length > 0) {
                restaurants.splice(restaurants.indexOf(filtered[0]), 1);
                res.status(200).json({
                    message: 'Restaurant Successd Deleted',
                });
            } else {
                res.status(404).json({
                    message: 'Not Found',
                });
            }
            break
        default:
            res.setHeader('Allow', ['GET', 'PUT', 'POST', 'DELETE'])
            res.status(405).end(`Method ${method} Not Allowed`)
            break
    }
}
