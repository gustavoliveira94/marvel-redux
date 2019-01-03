import React from 'react'
import '../App.css'

const Character = ({detail}) => {
    return (
        <div className="row justify-content-center">
            {
                detail.map(character => {
                    return (
                        <ul key={character.id} className="col-sm-12 col-md-6 col-lg-3 box-character">
                            <div className="card">
                                <img className="card-img-top" height="300px" alt={character.name} src={character.thumbnail.path + "." + character.thumbnail.extension} />
                                <div className="card-body">
                                    <h5 className="card-title">{character.name}</h5>
                                    <button className="btn btn-link-red" type="button" data-toggle="collapse" data-target={"#" + character.name.replace(/\W/g, '').replace(/[0-9]/g, '')} aria-expanded="false" aria-controls={character.name.replace(/\W/g, '').replace(/[0-9]/g, '')}>
                                        Descrição do personagem
                                        </button>
                                    <div className="collapse" id={character.name.replace(/\W/g, '').replace(/[0-9]/g, '')}>
                                        <p className="card-text">{character.description ? character.description : 'Um personagem da Marvel'}</p>
                                    </div>
                                    <a target="window.open()" className="btn btn-red" href={character.urls[0].url}>See all about this character</a>
                                </div>
                            </div>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default Character
