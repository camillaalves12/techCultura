import { Cards } from "../../components/cards/Cards"
import { Title } from "../../components/title/Title";
import S from "./styles.module.scss";

import ImgRocheira from '../../img/rocheira.jpg'
import CasaDaAposentadoria from '../../img/CasaDaAposentadoria.jpg'


export function Arts() {
   return(
      
      <div className={S.containerAll}>
         <Title />
         <div className={S.containerCards}>
            <Cards 
               src={ImgRocheira}
               title='Rocheira'
               description='Entre 1637 e 1645, a pacata Vila do Penedo do Rio São Francisco foi invadida pelos Holandeses...'
               nameBtn='Breve Descrição'
               to='/artItem'
               />

            <Cards 
               src={CasaDaAposentadoria}
               title='Casa da Aposentadoria'
               description='A casa de a Aposentadoria velha, é edificada para servir de hospedagem aos ouvidores...'
               nameBtn='Breve Descrição'
               to='/artItem'
            />

            <Cards 
               title='Convento'
               description='Some quick example text to build on the card title and make up the bulk of the card'
               nameBtn='Breve Descrição'
               to='/'
            />
            <Cards 
               title='Oratorio da Forca'
               description='Some quick example text to build on the card title and make up the bulk of the card'
               nameBtn='Breve Descrição'
               to='/'
            />
            <Cards 
               title='Teatro 7 de Setembro'
               description='Some quick example text to build on the card title and make up the bulk of the card'
               nameBtn='Breve Descrição'
               to='/'
            />
            <Cards 
               title='Catedral'
               description='Some quick example text to build on the card title and make up the bulk of the card'
               nameBtn='Breve Descrição'
               to='/'
            />
            <Cards 
               title='Casa de Penedo'
               description='Some quick example text to build on the card title and make up the bulk of the card'
               nameBtn='Breve Descrição'
               to='/'
            />
            <Cards 
               title='Igreja da Santas Cruz'
               description='Some quick example text to build on the card title and make up the bulk of the card'
               nameBtn='Breve Descrição'
               to='/'
            />
            <Cards 
               title='Mercado Público'
               description='Some quick example text to build on the card title and make up the bulk of the card'
               nameBtn='Breve Descrição'
               to='/'
            />
            <Cards 
               title='Igreja Nossa Sra Rosário dos Pretos'
               description='Some quick example text to build on the card title and make up the bulk of the card'
               nameBtn='Breve Descrição'
               to='/'
            />
            <Cards 
               title='Igreja Nossa Sra das Correntes'
               description='Some quick example text to build on the card title and make up the bulk of the card'
               nameBtn='Breve Descrição'
               to='/'
            />
            <Cards 
               title='Praça Imperial'
               description='Some quick example text to build on the card title and make up the bulk of the card'
               nameBtn='Breve Descrição'
               to='/'
            />


         </div>
      </div>

     
   )
}