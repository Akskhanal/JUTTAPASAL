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
import k from './k.png'
import l from './l.png'
import m from './m.png'
import n from './n.png'
import o from './o.png'





 export interface Product {
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


  export const nikeItems :Product[]=[
    {
      id: 11,
      name: "AIR JORDAN1 MID",
      price: 170,
      image:k,
    },
    {
      id: 12,
      name: "NIKE BLAZER MILD",
      price: 150,
      image:l,
    },
    {
      id: 13,
      name: "JUMP MAN TWO TREY",
      price: 154,
      image:m,
    },
    {
      id: 14,
      name: "AIR JORDAN 1 LOW FLY EASE",
      price: 152.99,
      image:n,
    },
    {
      id: 15,
      name: "AIR JORDEN 1 LOW OG",
      price: 170,
      image:o,
    },
  ]