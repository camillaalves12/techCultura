import S from "./styles.module.scss";

import { Art } from "../../components/art/Art";
import { Title } from "../../components/title/Title";

import ImgRocheira from '../../img/rocheira.jpg';


export function ArtItem() {
  return (
    <>
      <Title title='Rocheira' />
      <div>
      <Art
        src= {ImgRocheira}
        description="Entre 1637 e 1645, a pacata Vila do Penedo do Rio São Francisco foi invadida pelos Holandeses, tendo seu líder Conde JOÃO MAURÍCIO DE NASSAU ocupado um dos pontos estratégico da Vila a “ROCHEIRA”,
        construindo um Forte que recebeu o seu nome. Ali existia uma passagem secreta da “Rocheira” para o interior do Forte Maurício de Nassau. O local era privilegiado para que grandes embarcações pudessem atracar, sem contar que dava ótimas condições de defesa. Duarte coelho Pereira e Duarte coelho de Albuquerque, foram os que subiram o Rio São Francisco e chegaram a 'Grande penedo', e foi assim que fundaram o restaurante."
      />

      </div>
    </>
  );
}
