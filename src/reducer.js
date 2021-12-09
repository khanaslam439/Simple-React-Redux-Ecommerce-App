const initialState = {
  user: {
    name: 'Aslam',
    email: 'khanaslam439@gmail.com',
    isLogged: false
  },
  products: [
    {
      id: 1,
      name: "Fjallraven - Foldsack No. 1 Backpack, Fits 10 Laptops",
      detail:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      price: 109.95,
      quantity: 30,
      imgURL: "",
    },
    {
      id: 2,
      name: "Opna Women's Short Sleeve Moisture",
      detail:
        "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
      price: 229.95,
      quantity: 22,
      imgURL: "",
    },
    {
      id: 3,
      name: "DANVOUY Womens T Shirt Casual Cotton Short",
      detail:
        "95% Cotton,5% Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      price: 322.95,
      quantity: 14,
      imgURL: "",
    },
    {
      id: 4,
      name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      quantity: 30,
      imgURL: "",
    },
  ],
};

const reducer = (state = initialState, action) => {
  var cloneState = { ...state };
  switch (action.type) {
    case "USER_LOGIN":
      cloneState.user.isLogged = true;
      break;

    case "USER_LOGOUT":
      cloneState.user.isLogged = false;
      break;

    case "ADD_PRODUCT":
      cloneState.products.push(action.payload.data);
      break;

    case "EDIT_PRODUCT":
      cloneState.products.filter((el) => {
        if (el.id === action.payload.id) {
          let p = action.payload.product;
          el.name = p.name;
          el.detail = p.detail;
          el.price = p.price;
          el.quantity = p.quantity;
          el.imgURL = p.imgURL;
        }
        return true;
      });
      break;

    case "GET_PRODUCT":
      console.log("..all product sent");
      break;

    case "DELETE_PRODUCT":
      cloneState.products.splice(action.id - 1, 1);
      console.log(cloneState.products)
      break;

    default:
      console.log('Everything is fine')
  }

  return cloneState
};

export default reducer;