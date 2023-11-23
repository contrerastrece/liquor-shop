const Toast = ({text,toastColor}) => {
let color=toastColor;
  switch (toastColor){
    case 'add_to_cart':{
      text = 'Add to cart';break;
    }
    case 'remove_from_cart':{
      text="Remove From Cart";break;
  }
}
// console.log(color);
// la ganancia primero <-------------------- Leer
  return (
    <div className="toast toast-top toast-end ">
      <div className={`alert btn-${color} border p-3`}>
        <span className="text-white">{text}. 🎉</span>
      </div>
    </div>
  );
};

export default Toast;
