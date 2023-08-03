import Card from './Card';

const Cards= ({characters}) => {
   return(
    <div>
      {
      characters.map(({id, name, status, species, gender, origin, image, onClose})=>{
     return <Card
     key={id}
     name={name}
     status={status}
     species={species}
     gender={gender}
     origin={origin.name}
     onClose={onClose}
     image={image}
     /> 
      })
      }

    </div>
   )
}

export default Cards;