
import React, { useState } from "react";
import "./UserForm.css";


const UserForm = () => {

  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Limpia error del campo al escribir
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.username.trim()) nextErrors.username = "El usuario es obligatorio.";
    if (!form.password) nextErrors.password = "La contraseña es obligatoria.";
    if (!form.confirmPassword)
      nextErrors.confirmPassword = "Confirma la contraseña.";

    if (form.password && form.confirmPassword && form.password !== form.confirmPassword) {
      nextErrors.confirmPassword = "Las contraseñas no coinciden.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Aquí enviarías a tu API
    const payload = { username: form.username.trim(), password: form.password };
    console.log("Guardar usuario:", payload);

    // Reset
    setForm({ username: "", password: "", confirmPassword: "" });
    alert("Usuario guardado (demo).");
  };

  return (
    <div className='uf-container'>
      <form className='uf-card' onSubmit={onSubmit}>
        <h2 className="uf-title">Registro de Usuarios</h2>
        <p className="uf-subtitle">Completa los datos para registrar el usuario.</p>
        <div className="uf-field">  
          <label className="uf-label" htmlFor="username">Usuario</label>
          <input
            id="username"
            name="username"
            type="text"
            className={`uf-input ${errors.username ? "uf-input-error" : ""}`}
            placeholder="Ej: raul.chin"
            value={form.username}
            onChange={onChange}
            autoComplete="username"
          />
          {errors.username ? <span className="uf-error">{errors.username}</span> : null}
        </div>

        <div className="uf-field">
          <label className="uf-label" htmlFor="password">Contraseña</label>
          <input
            id="password"
            name="password"
            type="password"
            className={`uf-input ${errors.password ? "uf-input-error" : ""}`}
            placeholder="••••••••"
            value={form.password}
            onChange={onChange}
            autoComplete="new-password"
          />
          {errors.password ? <span className="uf-error">{errors.password}</span> : null}
        </div>

        <div className="uf-field">
          <label className="uf-label" htmlFor="confirmPassword">Confirmar contraseña</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            className={`uf-input ${errors.confirmPassword ? "uf-input-error" : ""}`}
            placeholder="••••••••"
            value={form.confirmPassword}
            onChange={onChange}
            autoComplete="new-password"
          />
          {errors.confirmPassword ? (
            <span className="uf-error">{errors.confirmPassword}</span>
          ) : null}
        </div>

         <button className="uf-btn" type="submit">
          Guardar
        </button>
      </form>
        
    </div>

  )
}

export default UserForm;
