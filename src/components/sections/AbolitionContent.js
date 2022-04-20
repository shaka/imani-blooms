import React, { useState } from 'react'
import classNames from 'classnames';
import Image from '../elements/Image'
import Select from 'react-select';
const options = [
    { value: "$18", label: `1/2 dozen double bloom tulips to support MI Liberations Black Mama's Bail Out`, link: 'https://www.paypal.com/donate/?hosted_button_id=WWRJQDHQLDRDQ' },
    { value: "$26", label: `1/2 dozen double bloom tulips to support MI Liberations Black Mama's Bail. Plus delivery`, link: 'https://www.paypal.com/donate/?hosted_button_id=Q5SSA86DKPBFS' },
    { value: "$30", label: `1 dozen double bloom tulips to support MI Liberations Black Mama's Bail`, link: 'https://www.paypal.com/donate/?hosted_button_id=ABN7H8PS83SGW' },
    { value: "$38", label: `1 dozen double bloom tulips to support MI Liberations Black Mama's Bail. Plus delivery.`, link: 'https://www.paypal.com/donate/?hosted_button_id=AD54DAR2L4826' },
    { value: "Various Amounts", label: `General Donation`, link: 'https://www.paypal.com/donate/?hosted_button_id=6BKR9R8MKJQ38' },
]

export default function AbolitionContent() {
    const [selectedOption, setSelectedOption] = useState(options[0]);
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
                <div className="padding-container" style={{ border: "5px solid #dfdfdf" }}>
                    <Image
                        width={"75%"}
                        src={require('./../../../src/assets/images/tulips.png')}
                    />
                    <div class="card" style={{ backgroundColor: "white" }}>
                        Beautiful long stem double bloom tulips with bright, bold colors
    <p style={{ fontWeight: '700', fontSize: '1.3em' }}>{selectedOption.value}</p>
                        <Select
                            className="selector"
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            isSearchable
                        />
                        <p><button onClick={() => { window.open(selectedOption.link, "_blank") }}>Donate via PayPal</button></p>
                    </div>
                </div>
                <div className="padding-container" style={{ textAlign: "left" }}>
                    <h3>Other Actions</h3>
                    <p style={{ fontSize: "14px" }}>
                        In addition to purchasing a bouquet or donating, we invite you to take action to create a world free of the current unjust carceral system, including pre-trial detention.  Pre-trial detention, like every aspect of the carceral system, is rooted in the inhuman system of enslavement of African peoples.
                        Taking Action to End Mass Incraction
                    </p>
                    <ul style={{ fontSize: "14px" }}>
                        <li>Support and take action with Abolitionist organizations like: MI Liberation, Black Abolitionist Network, The Marshall Project and <a href="https://abolitionnotes.org/prison-abolition-organizations">many others</a></li>
                        <li>Support efforts to defund the police and reinvest in communities. Organizations to connect with include the Detroit Justice Center</li>
                        <li>Support legislation to</li>
                        <ul style={{ fontSize: "14px" }}>
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