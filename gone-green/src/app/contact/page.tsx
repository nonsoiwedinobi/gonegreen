import Form from '../../components/Form/Form';
import styles from '../../styles.module.css'; 
import '../layout.css'

const Contact: React.FC = () => {
    return (
    <div className='contact-page'>
      <Form />
    </div>
    );
  };

export default Contact;
    // <h1>Contact Us</h1>
    //   <div className="flex-container">
    //     {/* Sidebar */}
    //     <aside className="bg-gray-200 p-4 rounded-md">
    //       <h2 className="text-lg font-semibold mb-3">Contact info</h2>
    //       <p><strong>Email: GoneGreen@gmail.com</strong></p>
    //       <p><strong>Phone: (123) 456-7890</strong></p>
    //       {/* Fake Locations */}
    //       <h2 className="text-lg font-semibold mt-4 mb-3">Our Locations</h2>
    //       <div>
    //         <p><strong className="font-bold">Location 1:</strong></p>
    //         <p>123 Main Street</p>
    //         <p>Cityville, State</p>
    //       </div>
    //       <div className="mt-3">
    //         <p><strong className="font-bold">Location 2:</strong></p>
    //         <p>456 Oak Avenue</p>
    //         <p>Townsville, State</p>
    //       </div>
    //     </aside>
  
    //     {/* Contact Form */}
    //     <div className="form-container">
    //       <h1 className="text-2xl font-semibold mb-4">Contact Form</h1>
    //       <form>
    //         <div className="mb-4">
    //           <label htmlFor="email" className="label">
    //             Email
    //           </label>
    //           <input
    //             type="email"
    //             id="email"
    //             name="email"
    //             className="input"
    //             required
    //           />
    //         </div>
    //         <div className="mb-4">
    //           <label htmlFor="description" className="label">
    //             Description
    //           </label>
    //           <textarea
    //             id="description"
    //             name="description"
    //             rows={4}
    //             className="textarea"
    //             required
    //           />
    //         </div>
    //         <button type="button" className="submit-button" disabled>
    //           Submit
    //         </button>
    //       </form>
    //     </div>
    //   </div>