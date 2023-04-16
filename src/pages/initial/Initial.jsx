import S from "./styles.module.scss";

import { Title } from "../../components/title/Title";
import { Cards } from "../../components/cards/Cards";

const cardsData = [
   {
     src: 'https://scontent-for1-1.xx.fbcdn.net/v/t39.30808-6/259557218_2346914185451319_6896628254111095036_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=C5bIRnojS2AAX8L65Rj&_nc_ht=scontent-for1-1.xx&oh=00_AfCkvmwBzmvFRynxQgb531swalZs3BTFsVzOxg6_FWwJQA&oe=643B89E6',
     title: 'Realidade Aumentada',
     description: 'Some quick example text to build on the card title and make up the bulk of the card',
     nameBtn: 'Iniciar a Realidade Aumentada',
     to: '/'
   },
   {
     src: 'https://scontent-for1-1.xx.fbcdn.net/v/t39.30808-6/259557218_2346914185451319_6896628254111095036_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=C5bIRnojS2AAX8L65Rj&_nc_ht=scontent-for1-1.xx&oh=00_AfCkvmwBzmvFRynxQgb531swalZs3BTFsVzOxg6_FWwJQA&oe=643B89E6',
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