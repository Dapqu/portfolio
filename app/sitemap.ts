import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
        url: 'https://dilimulati.com'
    },
    {
        url: 'https://dilimulati.com/resume'
    },
    {
        url: 'https://dilimulati.com/projects'
    },
    {
        url: 'https://dilimulati.com/contact'
    }
  ]
}