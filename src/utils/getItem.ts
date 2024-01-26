import { NextApiRequest, NextApiResponse } from 'next';
import { LinksHomeData } from '@/data/LinksHomeData';

export default function getItem(req: NextApiRequest, res: NextApiResponse) {

  console.log('Heyy .. estamos aquí !!')

  try {
    const { id, url } = req.query;

    // Filtrar los datos según el parámetro proporcionado (id o url)
    let filteredData = LinksHomeData;
    if (id) {
      const parsedId = parseInt(id as string, 10);
      filteredData = LinksHomeData.filter(item => item.id === parsedId);
    } else if (url) {
      filteredData = LinksHomeData.filter(item => item.url === url);
    }

    res.status(200).json({ linksHomeData: filteredData });
  } catch (error) {
    console.error('Error fetching linksHomeData:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}