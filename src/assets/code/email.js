
export const sendMail = (formDetails) => {


  const emailBody = `
      <html>
          <body>
              <h2 style={{ textAlign: 'center' }}>Portfolio Form Details</h2>
              <p><strong style={{ colour: 'red' }}>Email:</strong> ${formDetails.email}</p>
              <p><strong style={{ colour: 'red' }}>Message:</strong> ${formDetails.message}</p>
          </body>
      </html>
  `;


  window.Email.send({
    SecureToken: '401a29da-b306-4d76-988d-f2ac835082e6',
    To: 'samankwaa.frempong@gmail.com',
    From: "knobaddy@gmail.com",
    Subject: "Portfolio Email",
    Body: emailBody,
  }).then(
    () => alert("Email Sent")
  );
}