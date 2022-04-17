import React, { useState } from 'react'
import classNames from 'classnames';
import { PayPalButtons } from "@paypal/react-paypal-js";
import Select from 'react-select';
const options = [
    { value: "18", label: 'Half Dozen (6 Stems)' },
    { value: "28", label: 'One Dozen (12 Stems)' },
]

export default function AbolitionContent() {
    const [selectedOption, setSelectedOption] = useState(null);
    const outerClasses = classNames(
        'hero section center-content about-content',
        'has-top-divider',
        'padding-container'
    );
    return (
        <section
            className={outerClasses}
        >
            <h3>Free Black Mama’s - Abolition Now</h3>
            <p>
                Roses are Red <br />
    Violets are Blue<br />
    Free Black Mama’s<br />
    Abolish All Prisons too <br />

            </p>
            <div className="container-sm">
                <br />
            Imani Blooms supports abolitionist movements and organizers working to end mass incarceration and pre-trial detention. This year Imani Blooms is donating all proceeds from the Freedom Flower sale to Michigan Liberation’s Black Mama’s Bail Out Fund. Please consider purchasing a tulip bouquet or giving a donation to support Black Mama’s unjustly inprisioned through pre-trial detention.
            <br />
                <h3>Freedom Flowers</h3>
                <div className="padding-container">
                    <p>Beautiful long stem double tulips with bight, bold colors</p>
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                    />
                    <br />
                    {selectedOption && selectedOption.value === "18" &&
                        <PayPalButtons
                            onInit={() => console.log("initializing paypal")}
                            createOrder={(data, actions) => {
                                return actions.order
                                    .create({
                                        purchase_units: [
                                            {
                                                description: 'Half Dozen (6 Stems)',
                                                amount: {
                                                    currency_code: 'USD',
                                                    value: 18,
                                                },
                                            },
                                        ],
                                    })
                                    .then((orderId) => {
                                        // Your code here after create the order
                                        return orderId;
                                    });
                            }}
                            onApprove={function (data, actions) {
                                return actions.order.capture().then(function () {
                                    // Your code here after capture the order
                                });
                            }}
                        />
                    }
                    {selectedOption && selectedOption.value === "28" &&
                        <PayPalButtons
                            onInit={() => console.log("initializing paypal")}
                            createOrder={(data, actions) => {
                                return actions.order
                                    .create({
                                        purchase_units: [
                                            {
                                                description: 'One Dozen (12 Stems)',
                                                amount: {
                                                    currency_code: 'USD',
                                                    value: 28,
                                                },
                                            },
                                        ],
                                    })
                                    .then((orderId) => {
                                        // Your code here after create the order
                                        return orderId;
                                    });
                            }}
                            onApprove={function (data, actions) {
                                return actions.order.capture().then(function () {
                                    // Your code here after capture the order
                                });
                            }}
                        />
                    }
                </div>
                <div className="padding-container" style={{ textAlign: "left"}}>
                    <h3>Other Actions</h3>
                    <p style={{ fontSize: "14px"}}>
                    In addition to purchasing a bouquet or donating, we invite you to take action to create a world free of the current unjust carceral system, including pre-trial detention.  Pre-trial detention, like every aspect of the carceral system, is rooted in the inhuman system of enslavement of African peoples. 
Taking Action to End Mass Incraction
                    </p>
                    <ul style={{ fontSize: "14px"}}>
                        <li>Support and take action with Abolitionist organizations like: MI Liberation, Black Abolitionist Network, The Marshall Project and <a href="https://abolitionnotes.org/prison-abolition-organizations">many others</a></li>
                        <li>Support efforts to defund the police and reinvest in communities. Organizations to connect with include the Detroit Justice Center</li>
                        <li>Support legislation to</li>
                        <ul style={{ fontSize: "14px"}}>
                            <li>End cash bail </li>
                            <li>Restore federal voting rights automatically to returning citizens</li>
                            <li>End sentence minim­ums</li>
                        </ul>
                    </ul>
                </div>

            </div>
        </section>
    )
}