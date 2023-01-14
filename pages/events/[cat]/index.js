import CatEvent from '../../../src/components/events/catEvent'

const EventsCatPage =({data, pageName})=><CatEvent data={data} pageName={pageName}/>
 

export default EventsCatPage

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  const { events_categories} = await import ('/data/data.json')

  const allPaths = await events_categories.map(ev=>{
    return{
      params: {
        cat: ev.id.toString()
      }
    }
  })

  return {
    paths:  allPaths ,
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context){
  const cat = context?.params.cat

  console.log(cat)

  const { allEvents} = await import ('/data/data.json')
  const data = allEvents.filter(ev=> ev.city === cat)

  return{
    props:{data:data, pageName: cat}
  }
}