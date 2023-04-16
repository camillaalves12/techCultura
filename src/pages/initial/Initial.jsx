import S from "./styles.module.scss";

import { Title } from "../../components/title/Title";
import { Cards } from "../../components/cards/Cards";

const cardsData = [
   {
     src: 'https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg',
     title: 'Realidade Aumentada',
     description: 'Some quick example text to build on the card title and make up the bulk of the card',
     nameBtn: 'Iniciar a Realidade Aumentada',
     to: '/'
   },
   {
     src: 'https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg',
     title: 'Exibir Conteúdo Tradicional',
     description: 'Some quick example text to build on the card title and make up the bulk of the card',
     nameBtn: 'Exibir as Obras',
     to: '/arts'
   }
 ];


export function Initial() {
   return (
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