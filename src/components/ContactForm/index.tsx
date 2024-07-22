import { useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import style from "./styles.module.scss";

type FormProps = {
  onClose: () => void;
};

export default function Form({ onClose }: FormProps) {
  const [data, setData] = useState({});

  // const [tel, setTel] = useState("");

  // const Reg_cel = (num: any) => {
  //   const regex = "^(([0-9]{2}))s([9]{1})?([0-9]{4})-([0-9]{4})$";
  //   const sub = `($1)$2$3-$4`;
  //   const result = num.replace(regex, sub);
  //   return result;
  // };

  const handleChange = (event: any) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
    // console.log(data);
  };

  const SendData = () => {
    alert(JSON.stringify(data));
    onClose();
  };
  return (
    <>
      <form>
        {/* <div className={style.Input}>
          <label htmlFor="">Empresa:</label>
          <input
            type="text"
            name="business"
            onChange={(e) => handleChange(e)}
          />
        </div> */}
        <div className={style.Input}>
          <label>Nome:</label>
          <input type="text" name="name" onChange={(e) => handleChange(e)} />
        </div>
        <div className={style.Input}>
          <label>Email:</label>
          <input type="email" name="email" onChange={(e) => handleChange(e)} />
        </div>
        <div className={style.Input}>
          <label>Celular:</label>
          <input type="tel" name="cel" onChange={(e) => handleChange(e)} />
        </div>
        <div className={style.Send}>
          <input type="button" value={"Enviar"} onClick={SendData} />
        </div>
      </form>
    </>
  );
}
