import Link from "next/link";
import React, { useEffect, useState } from "react";
import s from "./basket.module.scss";
import { TbBasketOff } from "react-icons/tb";
function Basket() {
  let [res] = useState([{}]);
  let [returnFormData, setReturnFormData] = useState([]);
  let [country ,setCountry]=useState("")
  let [gorad ,setGorad]=useState("")
  let [phone_number ,setPhone_number]=useState("")
  let [email ,setEmail]=useState("")
  useEffect(() => {
    const Data = JSON.parse(localStorage.getItem("mester"));
    setReturnFormData(Data);
  }, []);
  let [modal, setModal] = useState(false);
  const [price, setPrice] = useState(1);
  if (!returnFormData) {
    returnFormData = [{ name: "none" }];
    return (
      <>
        <div className={s.returnFormData}>
          <TbBasketOff className={s.TbBasketOff} />
          <p>вы не добавили товар</p>
        </div>
      </>
    );
  }


 
  function nadlePrice() {
    let ans = 0;
    returnFormData.map((item) => (ans += item.attributes.price_1));
    setPrice(ans);
  }
  let info =()=>{
    let newFood = {
      country: country,
      gorad: gorad,
      phone_number:phone_number,
      email:email,
      pres:price,
      sd:[...returnFormData]
  };
  let countries = JSON.parse(localStorage.getItem("delivery"));
  if (!countries) {
    countries = [];
  }
  if (countries) {
    countries.filter((item) => item.id !== newFood.id);
    countries.push(newFood);
  } else {
    countries.push(newFood);
  }
  localStorage.setItem("delivery", JSON.stringify(countries));
  setModal(false)
  }
  setInterval(() => {
    nadlePrice();
  }, 1000);
  let removv = (remov) => {
    localStorage.removeItem("mester", [{ remov }]);
    setReturnFormData();
  };

  return (
    <div className={s.Basket}>
      <Link href="/"> назад</Link>
      <div className={s.info}>
        <div className={s.price_ww}>
          <p>{"$" + price} </p>
          <button onClick={() => setModal(() => true)}> заказать </button>
        </div>
      </div>
      {modal ? (
        <div className={s.modal}>
          <div className={s.modal_info}>
            <button onClick={() => setModal(() => false)}>х</button>
            <div className={s.inputs}>
              <form>
                <p>Страна</p>
                <input type="text" list="info"   onChange={(e) => setCountry(e.target.value)} />
                <datalist id="info">
                  <option value="Кыргызстан"></option>
                  <option value="Россия"></option>
                </datalist>
              </form>
              <form>
                <p>Горад</p>
                <input type="text"  onChange={(e) => setGorad(e.target.value)}/>
              </form>
              <form>
                <p>номер телефона</p>
                <input
                 onChange={(e) => setPhone_number(e.target.value)}
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  required
                />
              </form>
              <form>
                <p>email</p>
                <input type="email"    onChange={(e) => setEmail(e.target.value)}/>
              </form>
            </div>
            <div className={s.buttons}>
            <button onClick={() => setModal(() => false)}>Назад</button>
            <button onClick={()=>info()}>заказать</button>
          </div>
          </div>
        </div>
      ) : null}
      <div>{returnFormData.none}</div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 border-spacing-20">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {returnFormData.map((product, index) => (
    
              <div key={index} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={product.attributes.img.data[0].attributes.url}
                    alt="hhh"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.attributes.name}
                      </a>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.attributes.attributes}
                  </p>
                </div>
               
              </div>
            ))}
          </div>
        </div>
      </div>
      <button onClick={() => removv(res)}>удалить вео</button>
    </div>
  );
}

export default Basket;

