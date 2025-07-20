import "./projectDetails.css";
import Table from "react-bootstrap/Table";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom'


export function ProjectDetails() {
  return (
    <div className="projectDetails">
      <div className="pDetails-header"></div>
      <div className="details">
        <div className="d-client-info">
          <Table>
            <tbody>
              <tr>
                <td>Client</td>
                <td>Mark Henry</td>
              </tr>
              <tr>
                <td>Category</td>
                <td>Interiors</td>
              </tr>
              <tr>
                <td>Tags</td>
                <td>Interior, Home</td>
              </tr>
              <tr>
                <td>Date</td>
                <td>23.08.2024</td>
              </tr>
              <tr>
                <td>Link</td>
                <td>www.example.com</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="d-project-info">
          <h2>Minimal Look Hall</h2>
          <p>
            Elevate your hall with a minimalist design that emphasizes elegance and simplicity. Our approach focuses on clean lines, open spaces, and subtle decor to create a welcoming and uncluttered environment.
            <br /><br />
            Experience a hall that blends functionality with understated beauty. From streamlined furniture to harmonious color schemes, each element is chosen to enhance the space without overwhelming it.
            <br /><br />
            Discover how minimalism can transform your hall into a sophisticated and serene space.
          </p>
        </div>
      </div>
      <div className="zoomRoom">
      <InnerImageZoom src={"https://imgv3.fotor.com/images/share/Use-fotor-ai-interior-deisgn-tool-to-redesign-the-living-room_2023-12-25-083616_hzpn.png"} />
      </div>
    </div>
  );
}
