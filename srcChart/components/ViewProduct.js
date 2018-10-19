import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import '../styles/Styles.css'

class ViewPrduct extends Component {
  render() {
    return (
      <Layout>
        <Row> 
          <Col span={24} className="white-background">

            <div className="details-header">Product information</div>

            <div className="list-details">
              <span className="details-label">Product Code:</span>
              <span> 12345</span>
            </div>
            <div className="list-details">
              <span className="details-label">Product Name:</span>
              <span> Gum</span>
            </div>
            <div className="list-details">
              <span className="details-label">Product Weight:</span>
              <span> 25</span>
            </div>
            <div className="list-details">
              <span className="details-label">Weight Type:</span>
              <span> g</span>
            </div>
            <div className="list-details">
              <span className="details-label">Bar-code:</span>
              <span> 123456789</span>
            </div>
            <div className="list-details">
              <span className="details-label">Category Name:</span>
              <span> Pen</span>
            </div>
            <div className="list-details">
              <span className="details-label">Manufacturer:</span>
              <span> Emmy and Tech</span>
            </div>
            <div className="list-details">
              <span className="details-label">Brand Name:</span>
              <span> Brand comes here</span>
            </div>

            <div className="details-header">Other Information</div>

            <div className="list-details">
              <span className="details-label">Quantity:</span>
              <span> 200</span>
            </div>
            <div className="list-details">
              <span className="details-label">Reorder Threshold:</span>
              <span> 10</span>
            </div>
            <div className="list-details">
              <span className="details-label">Cost Price:</span>
              <span> 300</span>
            </div>
            <div className="list-details">
              <span className="details-label">Selling Price:</span>
              <span> 600</span>
            </div>
            <div className="list-details">
              <span className="details-label">Country of origin:</span>
              <span> Nigeria</span>
            </div>

            <div className="details-header">Description</div>

            <div className="list-details">
              <span className="details-label">Description:</span>
              <span> The description comes here</span>
            </div>
            
          </Col>
          
        </Row>
      </Layout>
    )
  }
}

export default ViewPrduct;