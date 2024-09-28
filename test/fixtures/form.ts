const form_html = `
<form
      id="form_contact"
      action="/index.html"
      method="POST"
      enctype="multipart/form-data"
    >
      <input type="text" name="firstName" />
      <input type="text" name="lastName" />
      <input type="password" name="user_password" />
      <input type="email" name="email" />
      <input type="checkbox" name="contact_me" />
      <input type="radio" name="gender" value="male" />
      <input type="radio" name="gender" value="female" />
      <textarea name="more_info">
      </textarea>
      <select name="country">
        <option value="es">Spain</option>
        <option value="us">USA</option>
        <option value="pt">Portugal</option>
      </select>
      <input type="file" name="attachments" accept="image/png, image/jpeg" />
</form>
`;

export default form_html;
