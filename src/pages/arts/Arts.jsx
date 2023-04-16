import { Cards } from "../../components/cards/Cards"
import { Title } from "../../components/title/Title";
import S from "./styles.module.scss";

import ImgRocheira from '../../img/rocheira.jpg'
import CasaDaAposentadoria from '../../img/CasaDaAposentadoria.jpg'

const cardsData = [
   {
      src:ImgRocheira,
      title:'Rocheira',
      description:'Entre 1637 e 1645, a pacata Vila do Penedo do Rio São Francisco foi invadida pelos Holandeses...',
      nameBtn:'Breve Descrição',
      to:'/artItem'
   },
   {
      src:CasaDaAposentadoria,
      title:'Casa da Aposentadoria',
      description:'A casa de a Aposentadoria velha, é edificada para servir de hospedagem aos ouvidores...',
      nameBtn:'Breve Descrição',
      to:'/casa-da-aposentadoria'
   },
]


export function Arts() {
   return(
      
      <div className={S.containerAll}>
         <Title />
         <div className={S.containerCards}>

            {cardsData.map((card, index) => (
              <Cards
                key={index}
                src={card.src}
                title={card.title}
                description={card.description}
                nameBtn={card.nameBtn}
                to={card.to}
              />
            ))}

         </div>
      </div>

     
   )
}