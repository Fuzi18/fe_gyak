import { Component, ReactNode } from "react";


export default class Kapcsolat extends Component {
    render(): ReactNode {
        return<div>
            <form>
            <label htmlFor="email-input">Email:</label>
                <input id="email-input" type="email" required placeholder="Email" />

                <label htmlFor="message-input">Üzenet:</label>
                <textarea id="message-input" required rows={5} placeholder="Ide írja az üzenetét" />

                <button type="submit">Küldés</button>

            </form>
        </div>
    }
    
}