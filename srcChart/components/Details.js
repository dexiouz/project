import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import '../styles/Styles.css'

class Details extends Component {
  render() {
    return (
      <Layout>
        <Row> 
          <Col span={24} className="white-background">

            <div className="details-header">Store information</div>

            <div className="list-details">
              <span className="details-label">Store Code:</span>
              <span> ACC00001</span>
            </div>
            <div className="list-details">
              <span className="details-label">Store name:</span>
              <span> Esty Base - RETAIL Main</span>
            </div>
            <div className="list-details">
              <span className="details-label">Store Owner:</span>
              <span> Mary Oppong</span>
            </div>
            <div className="list-details">
              <span className="details-label">Phone Number:</span>
              <span> 555-555-555-555</span>
            </div>
            <div className="list-details">
              <span className="details-label">WhatsApp Number:</span>
              <span> 555-555-555-555</span>
            </div>
            <div className="list-details">
              <span className="details-label">Email Address:</span>
              <span> author@gmail.com</span>
            </div>
            <div className="list-details">
              <span className="details-label">Year of Establishment:</span>
              <span> 09-02-2018</span>
            </div>

            <div className="details-header">Store Address</div>

            <div className="list-details">
              <span className="details-label">Address:</span>
              <span> Adjacent to Adenta Filling Station MTN Office</span>
            </div>
            <div className="list-details">
              <span className="details-label">Map Location:</span>
              <span> <i>Longitude:</i> (111111111) <i>Latitude:</i> (12222222)</span>
            </div>
            <div className="list-details">
              <span className="details-label">Physical Location:</span>
              <span> Along Madina-Adenta Road Near MTN Office</span>
            </div>
            <div className="list-details">
              <span className="details-label">Community:</span>
              <span> Adenta Filling</span>
            </div>
            <div className="list-details">
              <span className="details-label">City:</span>
              <span> Accra</span>
            </div>

            <div className="details-header">Other Information</div>

            <div className="list-details">
              <span className="details-label">Outlet Type:</span>
              <span> Bar</span>
            </div>
            <div className="list-details">
              <span className="details-label">Number of Coolers:</span>
              <span> 2</span>
            </div>
            <div className="list-details">
              <span className="details-label">Cooler Types:</span>
              <span> Fridge and Freezer</span>
            </div>
            <div className="list-details">
              <span className="details-label">Electricity:</span>
              <span> Yes</span>
            </div>
            <div className="list-details">
              <span className="details-label">Categories Handled:</span>
              <span> 13</span>
            </div>
            <div className="list-details">
              <span className="details-label">Source of Purchase:</span>
              <span> Distributor, Main Market, Neighbourhood</span>
            </div>
            <div className="list-details">
              <span className="details-label">Selling Activity:</span>
            </div>
            <div className="list-details">
              <span className="details-label">Service Type:</span>
            </div>
            <div className="list-details">
              <span className="details-label">Building Structure:</span>
            </div>
            <div className="list-details">
              <span className="details-label">Selling Area Size:</span>
            </div>
            <div className="list-details">
              <span className="details-label">Days Opened:</span>
            </div>
            <div className="list-details">
              <span className="details-label">Language Spoken:</span>
            </div>
            <div className="list-details">
              <span className="details-label">Days of The Week Opened:</span>
            </div>
          </Col>
          {/* <Col span={12}>
          aaa
          </Col> */}
        </Row>
      </Layout>
    )
  }
}

export default Details;