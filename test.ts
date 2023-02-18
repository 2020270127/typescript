type Player = {
  name: string;
  age?: number;
}; //alias 타입

const playerNico: {
  name: string;
  age?: number;
} = {
  name: "nico",
  age: 18,
};

const playerLynn: Player = {
  //alias 타입 추가
  name: "lynn",
  age: 18,
};

function playerMaker(name: string): Player {
  //리턴값 타입 지정
  return {
    name,
  };
}
const nico = playerMaker("nico");
nico.age = 18;
