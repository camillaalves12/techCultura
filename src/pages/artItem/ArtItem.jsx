import S from "./styles.module.scss";

import { Art } from "../../components/art/Art";
import { Title } from "../../components/title/Title";
import { useParams } from 'react-router-dom'

import ImgRocheira from '../../img/rocheira.jpg';
import PaçoImperial from '../../img/paçoImperial.jpg';
import MercadoPublico from '../../img/mercadoPublico.jpg';
import RosarioDosPretos from '../../img/rosarioDosPretos.jpg';
import Teatro from '../../img/teatro.jpg';
import Correntes from '../../img/correntes.jpg';
import CasaDaAposentadoria from '../../img/casaDaAposentadoria.jpg';
import Convento from '../../img/convento.jpg';
import SantaCruz from '../../img/santaCruz.jpg';
import Catedral from '../../img/catedral.jpg';
import CasaDoPenedo from '../../img/casaDoPenedo.jpg';
import OratorioDaForca from '../../img/oratorioDaForca.jpg';

const itemsData = [
  {
     src: ImgRocheira,
     title:'Rocheira',
     description:'Entre 1637 e 1645, a pacata Vila do Penedo do Rio São Francisco foi invadida pelos Holandeses...',
  },
  {
     src: PaçoImperial,
     title:'Paço Imperial',
     description:'O imponente sobrado, em estilo colonial, propriedade da FAMÍLIA LEMOS ARAÚJO, foi construído ...',
  },
  {
     src: RosarioDosPretos,
     title:'Igreja Nossa Sra. Rosário dos Pretos',
     description:'Nos primórdios do século XVII, escravos da Vila do Penedo do Rio São Francisco...',
  },
  {
     src: Teatro,
     title:'Teatro 7 de Setembro',
     description:'O teatro foi inaugurado em 07 de setembro de 1884. O local foi construído em um terreno...',
  },
  {
     src: Correntes,
     title:'Igreja Nossa Sra. das Correntes',
     description:'Em meados de 1720, em honra a Virgem Santa, os moradores da margem esquerda do Rio São Francisco...',

  },
  {
     src: CasaDaAposentadoria,
     title:'Casa da Aposentadoria',
     description:'A casa de a Aposentadoria velha, é edificada para servir de hospedagem aos ouvidores...',
  },
  {
     src: Convento,
     title:'Convento',
     description:'O Convento e Igreja Santa Maria dos Anjos, em Penedo-AL, foi o primeiro convento a ser fundado em 1661...',
  },
  {
     src: MercadoPublico,
     title:'Mercado Público',
     description:'Em 01/01/1898, o Mercado Público de Penedo foi inaugurado, tendo o Supervisor do Convento...',
  },
  {
     src: SantaCruz,
     title:'Igreja da Santa Cruz',
     description:'foi construída em 1818 em cima do terreiro africano. Conta a lenda que um visitante...',
  },
  {
     src: Catedral,
     title:'Catedral',
     description:'Catedral Diocesana é uma das belezas de Penedo que vai passar por revitalização Erguendo-se...',
  },
  {
     src: CasaDoPenedo,
     title:'Casa do Penedo',
     description:'O Museu Casa do Penedo é um espaço dedicado à história da cidade de Penedo, em Alagoas...',
  },
  {
     src: OratorioDaForca,
     title:'Oratório da Forca',
     description:'Em 01/01/1898, o Mercado Público de Penedo foi inaugurado, tendo o Supervisor do Convento...',
  },
]


export function ArtItem() {
  const params = useParams();
  const { id } = params;
  const index = parseInt(id) - 1;
  return (
    <>
      <Title title= {itemsData[index].title} />
      <div>
      <Art
        src= {itemsData[index].src}
        description= {itemsData[index].description}
      />

      </div>
    </>
  );
}
