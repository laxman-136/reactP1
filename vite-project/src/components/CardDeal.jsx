import { card } from '../assets'
import style, { layout } from '../style'
import Button from './Button'

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={style.heading2}>Find a better card deal <br className='sm:block hidden' /> in few easy step.</h2>
      <p className={`${style.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores cum molestias illum numquam aliquam voluptatibus aperiam quibusdam sunt aliquid asperiores, consectetur, sed iure! Facilis qui quasi sint omnis dolorum aliquid!
      </p>
      <Button style='mt-10' />
    </div>
    <div className={layout.sectionImg}
    >
      <img src={card} alt=""  className='w-[100%] h-[100%]'/>
    </div>
  </section>
)

export default CardDeal
