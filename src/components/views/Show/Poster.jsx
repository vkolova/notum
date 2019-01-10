import React from 'react'
import { observer } from 'mobx-react'

import { Modal, Icon } from 'semantic-ui-react'

@observer
class Poster extends React.Component {
    render () {
        const { name, poster_path, videos } = this.props.show

        const trailer = videos && videos.results ? videos.results[0] : false

        console.log(poster_path, videos, trailer);

        return <div className='show-poster'>
          {
              poster_path && <img
                src={ `https://image.tmdb.org/t/p/w500${poster_path}` }
                alt={ `${name} Poster` }
              />
          }
          {
              trailer &&
              <Modal
                  trigger={<div className='icon-wrapper'><Icon name='play circle' size='huge' /></div>}
                  basic size='large'
                  mountNode={document.querySelector('#show-page')}
              >
               <Modal.Content>
                 <iframe
                     width="768" height="432"
                     src={`https://www.youtube.com/embed/${trailer.key}`} frameBorder="0"
                     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                 />
               </Modal.Content>
             </Modal>
          }
        </div>
    }
}

export default Poster
