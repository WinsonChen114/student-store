import * as React from "react"
import "./Contact.css"

export default function Contact() {
    return (
        <div className="contact">
            <div className="content">
                <div className="text">
                    <p id="email">Email: code@path.org</p>
                    <p id="phone">Phone: 1-800-CODEPATH</p>
                    <p id="address">Address: 123 Fake Street, San Francisco, CA</p>
                </div>
            </div>
        </div>
    )
}