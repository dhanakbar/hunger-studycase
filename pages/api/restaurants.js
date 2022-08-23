// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { restaurants } from "../../data/restaurants"

export default function handler(req, res) {
  const method = req.method
  let { location, name, rating, image, description} = req.body

  switch (method) {
    case 'GET':
      res.status(200).json(restaurants)
      break;
    case 'POST':
      const newRestaurant = { 
        id: restaurants.length + 1,
        location,
        name,
        rating,
        image,
        description
      }
      restaurants.push(newRestaurant)
      res.status(200).json(restaurants)
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }

}
