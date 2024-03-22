import React, { useState } from "react";

const Checkout = () => {


      

        return (
            <div>
                <h1>Check out order here</h1>


                <form action="novalidate">
                        <fieldset id="deliveryinfo">
                            <legend>Customer Information </legend>
                            <label form="nameinput">Name</label>
                            <input type="text"  id="nameinput" required="required" />
                            <label form="addrinput">Street Address</label>
                            <input type="text" id="addrinput" name="address" required="required"/>
                            <label form="cityinput">City/State/Zip</label>
                            <input type="text" id="cityinput" name="city" required="required" />
                            <label form="emailinput">Email</label>
                            <input type="email" id="emailinput" name="email" required="required"  />
                            <label form="phoneinput">Phone</label>
                            <input type="text" id="phoneinput" name="phone" required="required"  />
                        </fieldset>
                </form>
            </div>
        );
    }
export default Checkout;