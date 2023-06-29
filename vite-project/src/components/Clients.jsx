import { clients } from '../constants'
import style from "../style";

const Clients = () => {
  return (
    <section className={`${style.flexCenter} my-4`}>
      <div className={`${style.flexCenter} flex flex-wrap w-full `}>
        {clients.map((clients) => (
          <div key={clients.id} className={`flex-1 ${style.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            <img src={clients.logo} alt="clients" className=' sm:w-[192px] w-[100px] object-contain' />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients
