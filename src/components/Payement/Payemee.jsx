import React,{useState,useEffect} from 'react';
import img1 from '../../assets/images/prod1.png';
import img2 from '../../assets/images/prod2.png';
import axios from 'axios'
import Swal from 'sweetalert2';
import './ProductCard.css'; 

const ProductCard = () => {
    const images = [img1, img2];
    const [payeToken, setPayeToken] = useState('');  
    const [quantity, setQuantity] = useState(1);
    console.log(quantity)

        //!  for the Payement Feauture
    // const handleAddToCart = async () => {
    //   const amount = quantity * 50; 
    //   console.log('amount',amount)
    //   const payload = {
    //     amount: amount.toString()
    //   };
    //   try {
    //     const response = await axios.post('https://ecoclicko.onrender.com/api/users/payement', payload);
    //     setPayeToken(response.data.data.token);
    //     console.log('Response:', response.data.data.token);
    //     console.log('Amount:', amount);
    //   } catch (error) {
    //     console.error('Error:', error);
    //   }
    // };
  
    // useEffect(() => {
    //   console.log('payeToken changed:', payeToken);
    //   if (payeToken) {
    //     window.location.href =`https://sandbox.paymee.tn/gateway/${payeToken}`;
    //   }
    // }, [payeToken]);
    
  
    const handleMouseMove = (event, index) => {
      const image = event.target;
      const { left, top, width, height } = image.getBoundingClientRect();
  
      const x = ((event.clientX - left) / width) * 100; 
      const y = ((event.clientY - top) / height) * 100;                 
      image.style.transformOrigin = `${x}% ${y}%`;
    };
  
    const handleMouseLeave = (event) => {
      event.target.style.transformOrigin = 'center center';
    };
  


    const handleQuantityChange = (amount) => {
      const newQuantity = Math.max(1, quantity + amount);
      setQuantity(newQuantity);
    };




    const handleReservation = () => {
      Swal.fire({
        title: 'Reserve Yours Now',
        html: `
          <input id="name" class="swal2-input" placeholder="Name" required>
          <input id="email" type="email" class="swal2-input" placeholder="Email" required>
          <input id="phone" class="swal2-input" placeholder="Phone Number" required>
        `,
        confirmButtonText: 'Reserve',
        preConfirm: () => {
          const name = Swal.getPopup().querySelector('#name').value;
          const email = Swal.getPopup().querySelector('#email').value;
          const phone = Swal.getPopup().querySelector('#phone').value;
          return { name, email, phone };
        },
      }).then(async (result) => {
        if (result.isConfirmed) {
          const { name, email, phone } = result.value;
          if (name && email && phone) {
            const reservationData = {
              name,
              email,
              phone,
            };
    
            axios.post('https://ecoclicko.onrender.com/api/Users/Reservation', reservationData)
              .then((response) => {
                if (response.status === 200) {
                  Swal.fire('Thank you for proceeding', '', 'success');
                } else {
                  Swal.fire('Failed to make a reservation. Please try again later.', '', 'error');
                }
              })
              .catch((error) => {
                console.error('Error making a reservation:', error);
                Swal.fire('An error occurred while making the reservation. Please try again later.', '', 'error');
              });
          } else {
            Swal.fire('Invalid input. Please try again.', '', 'error');
          }
        }
      });
    };

    

  return (
    <section className="product-card mt-5  ">
<div className="background-image"></div>
      <div className="container ">
          <div className="row">
            <div className="col-md-6 product-image">
              <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {images.map((image, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                      <img
                        src={image}
                        className="d-block w-100 product-image"
                        alt={`Product ${index + 1}`}
                        onMouseMove={(event) => handleMouseMove(event, index)}
                        onMouseLeave={handleMouseLeave}
                      />
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          <div className="col-md-6 product-details">
          <h2 className="product-title">
  <span className="red-text">ECOCLICKO</span> Transforming Playtime into Eco-Adventures for Young Minds
</h2>           
            <hr className="my-3" />
            <p className="product-description">
            And because we want to support you as best as possible in this adventure, because ECOCLICKO is an educational games service based on sustainable values, in order to build a resilient and sustainable, inclusive education, parents have a very important role and power. important, our exclusive nugget, a guide that you receive in your mailbox, dedicated to parents which contains valuable advice in ecological education, exclusive tips to help your children in the development of their green skills.
This little guide is the fruit of dedicated and passionate work and will give and help you with valuable keys to a fulfilling and green “home school” education.
 Embark with us on this exceptional adventure and together let's transform our children's educational daily life into a green daily life.
            </p>
            

            <div className="product-quantity">

              
      {
//! for Quantity Payement       
      /* <div className="input-group input-spinner">
        <button
          className="button-minus btn btn-sm"
          onClick={() => handleQuantityChange(-1)}
        >
          -
        </button>
        <input
          type="number"
          step="1"
          max="10"
          value={quantity}
          name="quantity"
          className="quantity-field form-control-sm form-input"
          readOnly
        />
        <button
          className="button-plus btn btn-sm"
          onClick={() => handleQuantityChange(1)}
        >
          +
        </button>
      </div> */}

      
      <button className="btn btn-primary add-to-cart-btn" onClick={handleReservation}>
        Reserve Yours Now
      </button>      


    </div>


           
          </div>


          {/* <div className="row mt-5">
      <div className="col-md-12">
        <div className="image-gallery">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Product ${index + 1}`} className="gallery-image" />
            </div>
          ))}
        </div>
      </div>
    </div> */}


        </div>
      </div>
  

    </section>
    
    

    

      
      );
    };
    
export default ProductCard;
