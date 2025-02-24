import React from 'react'

const Product = () => {

  const product = [
    {
      name: null,
      price: "200",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_Db0jJvWe6vYScLksI8qoM2WCeHfJnSBVw&s"
    },
    {
      name: "Banana",
      price: "500",
      image: "https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2018/08/bananas-1354785_1920.jpg"
    },
    {
      name: "Orange",
      price: "600",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTct4QnA6zwU4tyn9vq_ADJ8Ey6RfIWK-6V6g&s"
    },
    {
      name: "Guava",
      price: "700",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBePRa9mErJGZpF7C9ZuD4RehKCcFyySQOEw&s"
    },
    {
      name: "Graps",
      price: "300",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/1/OG/JA/IJ/45117192/fresh-black-graps-500x500.jpg"
    },
  ]


  return (
    <>
      <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">Fresh Fruits & Vegetables</h2>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">


            {product?.map((data) => (
              <>
              <article className="relative flex flex-col overflow-hidden rounded-lg border">
                <div className="aspect-square overflow-hidden">
                  <img className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src={data?.image} alt="" />
                </div>
                <div className="absolute top-0 m-2 rounded-full bg-white">
                  <p className="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
                </div>
                <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                  <div className="mb-2 flex">
                    <p className="mr-3 text-sm font-semibold">Rs.{data?.price}</p>
                    <del className="text-xs text-gray-400"> $79.00 </del>
                  </div>
                  <h3 className="mb-2 text-sm text-gray-400">{data?.name}</h3>
                </div>
                <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                  <div className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
                  <div className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
                </button>
              </article>
              </>
            ))}


          </div>
        </div>
      </section>




    </>
  )
}

export default Product