import a from './a.png'
import b from './b.png'
import c from './c.png'
import d from './d.png'
import e from './e.png'
import f from './f.png'
import g from './g.png'
import h from './h.png'
import i from './i.png'
import j from './j.png'




interface Product {
    id: number;
    name: string;
    price:number
    image: string; // Assuming this is the file path to the image
  }
export const Storeitems :Product[]=[
    {
      id: 1,
      name: "FORUM LOW X THE GRICH SHOES",
      price: 130,
      image:a,
    },
    {
        id: 2,
        name: "COLOMBIA GAZELLE SHOES",
        price: 100,
        image: b,
      },
      {
        id: 3,
        name: "STAN SMITH SHOES",
        price: 100,
        image: c,
      },
      {
        id: 4,
        name: "MULTIX SHOES",
        price: 35,
        image: d,
      },
      {
        id: 5,
        name: "ADIFORM STAN SMITH MULESHOES",
        price: 70,
        image: e,
      },
      {
        id: 6,
        name: "ADIFORM STAN SMITH MULESHOES",
        price: 70,
        image: f,
      },
      {
        id: 7,
        name: "HARDEN VOLUME 7 BASKETBALL SHOES",
        price: 112,
        image: g,
      },
      {
        id: 8,
        name: "TRAE YOUNG 1 BASKETBALL SHOES",
        price: 140,
        image: h,
      },
      {
        id: 9,
        name: "NORA SHOES",
        price: 80,
        image: i,
      },
      {
        id: 10,
        name: "STABIL NEXT GEN SHOES",
        price: 160,
        image:j
      },

  
  ]