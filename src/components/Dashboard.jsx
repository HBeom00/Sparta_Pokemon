const Dashboard = ({ select }) => {
  return (
    <div>
      <p>나만의 포켓몬</p>
      <div>
        {select.map((el) => {
          return (
            <div key={el.id}>
              <img src={el.img_url} alt="pokemon_img" />
              <p>{el.korean_name}</p>
              <p>{el.types.join(", ")}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
