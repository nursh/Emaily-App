module.exports = ({ body }) => {
  return `
    <html>
      <body>
        <div style="text-align: center">
          <h3>I'd like your input</h3>
          <p>Please answer the following survey for better service</p>
          <p>${body}</p>
          <div>
            <a href="http://localhost:3000/api/surveys/feedback">Yes</a>
          </div>
          <div>
            <a href="http://localhost:3000/api/surveys/feedback">No</a>
          </div>
        </div>
      </body>
    </html>  
  `;
}

// The links for the yes and no should point to your app domain