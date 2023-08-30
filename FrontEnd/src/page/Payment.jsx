import axios from "axios";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "../component/CreditCard/Utils";
import Card from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useRef } from "react";
import "../payment.css";
import Swal from "sweetalert2";

function Payment() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  });

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     await axios.put(`http://localhost:5000/payment/${id}`, {
  //       price
  //     });
  //     navigate(`/details/${id}`);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [issuer, setIssuer] = useState("");
  const [focused, setFocused] = useState("");
  const [formData, setFormData] = useState(null);
  const [formattedCardNumber, setFormattedCardNumber] = useState();
  const [formattedExpirationDate, setFormattedExpirationDate] = useState();
  const [formattedCvc, setFormattedCvc] = useState();
  const formRef = useRef(null);

  const handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      setIssuer(issuer);
    }
  };

  const handleInputFocus = ({ target }) => {
    setFocused(target.name);
  };

  const handleInputChange = ({ target }) => {
    setCardData({ ...cardData, [target.name]: target.value });

    let value = target.value;
    const name = target.name;

    if (name === "number") {
      value = formatCreditCardNumber(value);
      setFormattedCardNumber(value);
    } else if (name === "expiry") {
      value = formatExpirationDate(value);
      console.log(value);
      setFormattedExpirationDate(value);
      // console.log(value.slice(3));
    } else if (name === "cvc") {
      value = formatCVC(value);
      setFormattedCvc(value);
    }

    if (name === "number") {
      setNumber(value);
    } else if (name === "name") {
      setName(value);
    } else if (name === "expiry") {
      setExpiry(value);
    } else if (name === "cvc") {
      setCvc(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hhhhhhhhhhhhhhh")

    
    
    
    // const elements = [...formRef.current.elements];
    const errors = validateForm();
    console.log(errors)
    if (Object.keys(errors).length === 0) {
      axios.put(`http://localhost:5000/payment/${id}`)
      .then((response) => {
        console.log(response.data);
        // navigate("/thankYou");
      })
      .catch((error) => {
        console.error(error, "error in save the order");
      });
      Swal.fire(
        "Order completed!",
        "You can view your orders in your profile!",
        "success"
        );
        navigate(`/details/${id}`);
    } else {
      setValidationErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = {};

    const cvcPattern = /^\d{3,4}$/;
    const currentYear = new Date().getFullYear() % 100; // Last two digits of the current year
    const currentMonth = new Date().getMonth() + 1; // Current month (1-12)

    if (!cardData.number) {
      errors.number = "Card number is required";
    }

    if (cardData.name.trim() === "") {
      errors.name = "Name is required";
    }

    let monthValue;
    if (cardData.expiry.slice(0, 1) == 0) {
      monthValue = cardData.expiry.slice(1, 2);
    } else {
      monthValue = cardData.expiry.slice(0, 2);
    }

    if (cardData.expiry.slice(2, 4) < currentYear) {
      errors.expiry = "Invalid expiry date";
    } else if (cardData.expiry.slice(2, 4) >= currentYear) {
      if (Number(monthValue) < currentMonth) {
        errors.expiry = "Invalid expiry date";
      }
    }

    if (!cvcPattern.test(cardData.cvc)) {
      errors.cvc = "Invalid CVC";
    }

    return errors;
  };

  const formatCardNumber = (input) => {
    const trimmedInput = input.replace(/\s+/g, ""); // Remove existing spaces
    let formattedNumber = "";
    for (let i = 0; i < trimmedInput.length; i += 4) {
      formattedNumber += trimmedInput.slice(i, i + 4) + " ";
    }
    return formattedNumber.trim(); // Remove trailing space
  };

  return (
    <>
      <div className="col-md-8 order-md-1">
        {/* <h4 className="mb-3">Billing address</h4> */}
        <form
          className="needs-validation"
          noValidate=""
          onSubmit={handleSubmit}
        >
          <>
            <h4 className="mb-3 mt-1">Payment Info</h4>
            {/*---------------------------------- Credit Card --------------------------------------------- */}

            <div key="Payment">
              <div className="App-payment">
                <h1>React Credit Cards</h1>
                <h4 className="mb-5">
                  Beautiful credit cards for your payment forms
                </h4>
                <Card
                  number={number}
                  name={name}
                  expiry={expiry}
                  cvc={cvc}
                  focused={focused}
                  callback={handleCallback}
                />

                <div className="flex justify-center items-center flex-col">
                  <label htmlFor="" className="mt-2 mb-1">
                    Card Number <sup className="text-danger">*</sup>
                  </label>
                  <input
                    className="appearance-none w-1/2 block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="tel"
                    name="number"
                    placeholder="Card Number"
                    value={formattedCardNumber}
                    // pattern="[\d| ]{16,22}"
                    required
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                  {validationErrors.number && (
                    <div className="text-red-500">
                      {validationErrors.number}
                    </div>
                  )}

                  {/* <small>E.g.: 49..., 51..., 36..., 37...</small> */}
                </div>
                <div className="flex justify-center items-center flex-col">
                  <label htmlFor="" className="mt-2 mb-1">
                    Name on the card <sup className="text-danger">*</sup>
                  </label>
                  <input
                    className="appearance-none block w-1/2 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="">
                    <label htmlFor="" className="mt-2 mb-1">
                      Expiry Date
                      <sup className="text-danger">*</sup>
                    </label>
                    <input
                      type="tel"
                      name="expiry"
                      className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="Valid Thru"
                      value={formattedExpirationDate}
                      pattern="\d\d/\d\d"
                      required
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                    />
                    {validationErrors.expiry && (
                      <div className="text-red-500">
                        {validationErrors.expiry}
                      </div>
                    )}
                  </div>
                  <div className="">
                    <label htmlFor="" className="mt-2 mb-1">
                      CVC <sup className="text-danger">*</sup>{" "}
                    </label>
                    <input
                      className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="tel"
                      name="cvc"
                      placeholder="CVC"
                      value={formattedCvc}
                      pattern="\d{3,4}"
                      required
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                    />
                  </div>
                </div>
                <input type="hidden" name="issuer" value={issuer} />

                {/* <button class="btn col-4 btn-dark submitbtn btn-lg btn-block" type="submit">Continue to checkout</button> */}

                <div className="flex justify-center my-9">
                  <button className="checkoutbtn2 " type="submit">
                    <span className="circle1" />
                    <span className="circle2" />
                    <span className="circle3" />
                    <span className="circle4" />
                    <span className="circle5" />
                    <span className="text" role="submit">Submit</span>
                  </button>
                </div>
              </div>
            </div>
          </>
        </form>
      </div>
    </>
  );
}

export default Payment;
