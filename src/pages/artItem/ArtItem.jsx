import S from "./styles.module.scss";

import { Art } from "../../components/art/Art";
import { Title } from "../../components/title/Title";

export function ArtItem() {
  return (
    <>
      <Title title='Rocheira' />
      <div>
      <Art
        src="https://scontent-for1-1.xx.fbcdn.net/v/t39.30808-6/259557218_2346914185451319_6896628254111095036_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=C5bIRnojS2AAX-2HPNl&_nc_ht=scontent-for1-1.xx&oh=00_AfDl6YJND90fR11-CdeoMavcENmgZs3uPEGFDUjqPxfTjg&oe=64398FA6"
        description="Entre 1637 e 1645, a pacata Vila do Penedo do Rio São Francisco foi invadida pelos Holandeses, tendo seu líder Conde JOÃO MAURÍCIO DE NASSAU ocupado um dos pontos estratégico da Vila a “ROCHEIRA”,
        construindo um Forte que recebeu o seu nome. Ali existia uma passagem secreta da “Rocheira” para o interior do Forte Maurício de Nassau. O local era privilegiado para que grandes embarcações pudessem atracar, sem contar que dava ótimas condições de defesa. Duarte coelho Pereira e Duarte coelho de Albuquerque, foram os que subiram o Rio São Francisco e chegaram a 'Grande penedo', e foi assim que fundaram o restaurante."
      />

      </div>
    </>
  );
}
