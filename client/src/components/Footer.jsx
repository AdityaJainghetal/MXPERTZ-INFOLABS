


// const Footer = () => {
//   return (
//     <>
//       <div id="footer">
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <th>
//             Home
//           </th>

//           <th>
//             About
//           </th>

//           <th>
//             Contact
//           </th>

//           <th>
//             Service
//           </th>
//           <th>
//             address
//           </th>
//         </div>
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <th>
//             Home
//           </th>

//           <th>
//             About
//           </th>

//           <th>
//             Contact
//           </th>

//           <th>
//             Service
//           </th>
//           <th>
//             address
//           </th>
//         </div>
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <th>
//             Home
//           </th>

//           <th>
//             About
//           </th>

//           <th>
//             Contact
//           </th>

//           <th>
//             Service
//           </th>
//           <th>
//             address
//           </th>
//         </div>

//       </div>

//     </>
//   )
// }


// export default Footer;


    import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <>

    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
      <MDBContainer className='pt-4'>
        <section className='mb-4'>
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fab fa-facebook-f' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-twitter' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-google' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-instagram' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-linkedin' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-dark' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>

    </>
  )
}

export default Footer