const Mybutton = ({ text, type, onClick }) => {

  const btnType = ['positive', 'negative'].includes(type) ? type: 'default'; // 배열안에 타입이 있냐? 있다면 type 그대로 반환 : 없다면 강제로 'default' 반환
  return (
    <button className={["MyButton", `MyButton_${btnType}`].join(" ")} onClick={onClick}>
      {text}
    </button>
  );
};

Mybutton.defaultProps = {
  type: "default"
};


export default Mybutton;