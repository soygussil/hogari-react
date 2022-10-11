import React from 'react'
import Slider from "react-slick";

const Ciudades = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        speed: 8000,
        autoplaySpeed: 8000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4'>

            <h2 className='text-center text-4xl font-bold'>Nuestras Ubicaciones</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsa suscipit dolorem delectus repellat vitae rerum nulla reiciendis molestias error, tempore nobis et distinctio ea culpa! Hic exercitationem incidunt iure.</p>
            <p className='text-center font-bold text-xl py-2'>Nos encontramos en las siguientes ciudades:</p>
            <div className='py-6 text-center text-2xl'>
                <Slider {...settings}>
                    <div className='shadow-xl  transition ease-in-out delay-150 bg-slate-100 hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300 border-8 border-slate-200 ml-3'>
                        <img className='object-cover h-48 w-96' src="https://rvca738f6h5tbwmj3mxylox3-wpengine.netdna-ssl.com/es/wp-content/uploads/sites/2/2021/02/GI-884646886-Mexico-City-Angel-1920x1080.png" alt="Cdmx" />
                        <h3 className='pt-3 subpixel-antialiased font-bold text-stone-900'>Ciudad de México</h3>
                        <p className='text-sm py-3 subpixel-antialiased text-justify m-3 font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aut nam iste nostrum, sit cum corporis tempore repudiandae omnis, expedita asperiores consequatur impedit aliquam vitae quidem nesciunt consectetur at incidunt?</p>
                    </div>
                    <div className='shadow-xl transition ease-in-out delay-150 bg-slate-100 hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300 border-8 border-slate-200 ml-3'>
                        <img className='object-cover h-48 w-96' src="https://amqueretaro.com/wp-content/uploads/2022/09/quereok.jpg" alt="QRO" />
                        <h3 className='pt-3 subpixel-antialiased font-bold text-stone-900'>Santiago de Queretaro</h3>
                        <p className='text-sm py-3 subpixel-antialiased text-justify m-3 font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aut nam iste nostrum, sit cum corporis tempore repudiandae omnis, expedita asperiores consequatur impedit aliquam vitae quidem nesciunt consectetur at incidunt?</p>
                    </div>
                    <div className='shadow-xl transition ease-in-out delay-150 bg-slate-100 hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300 border-8 border-slate-200 ml-3'>
                        <img className='object-cover h-48 w-96' src="https://www.turismomexico.es/wp-content/uploads/2020/06/reloj_pachuca.jpg" alt="Pachuca" />
                        <h3 className='pt-3 subpixel-antialiased font-bold text-stone-900'>Pachuca Hidalgo</h3>
                        <p className='text-sm py-3 subpixel-antialiased text-justify m-3 font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aut nam iste nostrum, sit cum corporis tempore repudiandae omnis, expedita asperiores consequatur impedit aliquam vitae quidem nesciunt consectetur at incidunt?</p>
                    </div>
                    <div className='shadow-xl transition ease-in-out delay-150 bg-slate-100 hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300 border-8 border-slate-200 ml-3 '>
                        <img className='object-cover h-48 w-96' src="https://live.staticflickr.com/65535/48370084197_99567595b0_b.jpg" alt="chilpan" />
                        <h3 className='pt-3 subpixel-antialiased font-bold text-stone-900'>Chilpancingo Guerrero</h3>
                        <p className='text-sm py-3 subpixel-antialiased text-justify m-3 font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aut nam iste nostrum, sit cum corporis tempore repudiandae omnis, expedita asperiores consequatur impedit aliquam vitae quidem nesciunt consectetur at incidunt?</p>
                    </div>
                    <div className='shadow-xl transition ease-in-out delay-150 bg-slate-100 hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300 border-8 border-slate-200 ml-3'>
                        <img className='object-cover h-48 w-96' src="https://topadventure.com/__export/1618845094503/sites/laverdad/img/2021/04/19/tips_puebla_volcan.jpeg_557888218.jpeg" alt="Puebla" />
                        <h3 className='pt-3 subpixel-antialiased font-bold text-stone-900'>Puebla de los Angeles</h3>
                        <p className='text-sm py-3 subpixel-antialiased text-justify m-3 font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aut nam iste nostrum, sit cum corporis tempore repudiandae omnis, expedita asperiores consequatur impedit aliquam vitae quidem nesciunt consectetur at incidunt?</p>
                    </div>
                    <div className='shadow-xl transition ease-in-out delay-150 bg-slate-100 hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300 border-8 border-slate-200 ml-3'>
                        <img className='object-cover h-48 w-96' src="https://www.eleconomista.com.mx/__export/1654043317061/sites/eleconomista/img/2022/05/31/leon-guanajuato-turismo-cortesia-twitter-sectur.png_1015297232.png" alt="Leon GTO" />
                        <h3 className='pt-3 subpixel-antialiased font-bold text-stone-900'>León Guanajuato</h3>
                        <p className='text-sm py-3 subpixel-antialiased text-justify m-3 font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aut nam iste nostrum, sit cum corporis tempore repudiandae omnis, expedita asperiores consequatur impedit aliquam vitae quidem nesciunt consectetur at incidunt?</p>
                    </div>
                    <div className='shadow-xl transition ease-in-out delay-150 bg-slate-100 hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300 border-8 border-slate-200 ml-3'>
                        <img className='object-cover h-48 w-96' src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/66000/66886-Morelia.jpg" alt="Morelia" />
                        <h3 className='pt-3 subpixel-antialiased font-bold text-stone-900'>Morelia Michoacán</h3>
                        <p className='text-sm py-3 subpixel-antialiased text-justify m-3 font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aut nam iste nostrum, sit cum corporis tempore repudiandae omnis, expedita asperiores consequatur impedit aliquam vitae quidem nesciunt consectetur at incidunt?</p>
                    </div>
                    <div className='shadow-xl transition ease-in-out delay-150 bg-slate-100 hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300 border-8 border-slate-200 ml-3'>
                        <img className='object-cover h-48 w-96' src="https://media.traveler.es/photos/613768b26936668f30c3e855/master/w_1600%2Cc_limit/159073.jpg" alt="Gdl" />
                        <h3 className='pt-3 subpixel-antialiased font-bold text-stone-900'>Guadalajara Jalisco</h3>
                        <p className='text-sm py-3 subpixel-antialiased text-justify m-3 font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aut nam iste nostrum, sit cum corporis tempore repudiandae omnis, expedita asperiores consequatur impedit aliquam vitae quidem nesciunt consectetur at incidunt?</p>
                    </div>
                    <div className='shadow-xl transition ease-in-out delay-150 bg-slate-100 hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300 border-8 border-slate-200 ml-3'>
                        <img className='object-cover h-48 w-96' src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/2COLWQINWFF6TAXD36R3M3PCC4.jpg" alt="mty" />
                        <h3 className='pt-3 subpixel-antialiased font-bold text-stone-900'>Monterrey Nuevo León</h3>
                        <p className='text-sm py-3 subpixel-antialiased text-justify m-3 font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aut nam iste nostrum, sit cum corporis tempore repudiandae omnis, expedita asperiores consequatur impedit aliquam vitae quidem nesciunt consectetur at incidunt?</p>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Ciudades