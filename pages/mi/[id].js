export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(ninja => {
      return {
        params: { id: ninja.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }


export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);

    
    const data = await res.json();
    console.log('data -> ', data)
  
    return {
      props: { ninja: data }
    }
  }



const DetailsPage = ({ninja} ) => {
    console.log('miData -> ', {ninja})
    return (
        <div>
            <h1>{ninja.name}</h1>
            <h2> {ninja.email} </h2>
            <h2> {ninja.website} </h2>
            <h2> {ninja.email} </h2>
            ˜``

        </div>
    )
}

export default DetailsPage