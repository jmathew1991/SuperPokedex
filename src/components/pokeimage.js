import React from 'react';

export default (props)=>{
  return <div className="PokeImage"><img src={require(`../images/pokemon_sprites/${props.idNum}.png`)} alt={`${props.name} sprite`}/></div>
}